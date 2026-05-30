const API = {
  BASE: 'https://www.alphavantage.co/query',

  _parsePair(symbol) {
    return { from: symbol.slice(0, 3), to: symbol.slice(3) };
  },

  _buildUrl(params) {
    return this.BASE + '?' + Object.entries(params)
      .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
      .join('&');
  },

  async fetchCandles(symbol, timeframe, apiKey) {
    if (!apiKey) throw new Error('API key required — get a free key at alphavantage.co');

    const cacheKey = `${symbol}_${timeframe}`;
    const cached = Store.getCachedData(cacheKey);
    if (cached) return cached;

    const { from, to } = this._parsePair(symbol);
    const params = { apikey: apiKey };
    let seriesKey;

    if (timeframe === 'W1') {
      Object.assign(params, { function: 'FX_WEEKLY', from_symbol: from, to_symbol: to });
      seriesKey = 'Time Series FX (Weekly)';
    } else if (timeframe === 'D1') {
      Object.assign(params, { function: 'FX_DAILY', from_symbol: from, to_symbol: to, outputsize: 'full' });
      seriesKey = 'Time Series FX (Daily)';
    } else {
      const ivMap = { M15: '15min', M30: '30min', H1: '60min', H4: '60min' };
      const interval = ivMap[timeframe] || '60min';
      Object.assign(params, {
        function: 'FX_INTRADAY',
        from_symbol: from,
        to_symbol: to,
        interval,
        outputsize: 'full',
        extended_hours: 'false',
      });
      seriesKey = `Time Series FX (${interval})`;
    }

    const res = await fetch(this._buildUrl(params));
    if (!res.ok) throw new Error(`Network error (${res.status})`);

    const json = await res.json();

    if (json['Note'] || json['Information']) {
      throw new Error('Rate limit reached. Free tier: 25 requests/day, 5/min. Wait and retry.');
    }
    if (json['Error Message']) {
      throw new Error('API error — check your API key and pair symbol.');
    }

    const series = json[seriesKey];
    if (!series) throw new Error(`No data returned for ${symbol} ${timeframe}. Try D1 or W1 timeframes.`);

    const isDayOrWeek = timeframe === 'D1' || timeframe === 'W1';

    let candles = Object.entries(series).map(([time, v]) => ({
      time: isDayOrWeek
        ? time
        : Math.floor(new Date(time.replace(' ', 'T') + 'Z').getTime() / 1000),
      open:  parseFloat(v['1. open']),
      high:  parseFloat(v['2. high']),
      low:   parseFloat(v['3. low']),
      close: parseFloat(v['4. close']),
    })).sort((a, b) => (a.time > b.time ? 1 : -1));

    if (timeframe === 'H4') candles = this._aggH4(candles);

    Store.setCachedData(cacheKey, candles);
    return candles;
  },

  _aggH4(candles) {
    const out = [];
    let bucket = null;
    for (const c of candles) {
      const d = new Date(c.time * 1000);
      const slotH = Math.floor(d.getUTCHours() / 4) * 4;
      d.setUTCHours(slotH, 0, 0, 0);
      const bt = Math.floor(d.getTime() / 1000);

      if (!bucket || bucket.time !== bt) {
        if (bucket) out.push(bucket);
        bucket = { time: bt, open: c.open, high: c.high, low: c.low, close: c.close };
      } else {
        bucket.high  = Math.max(bucket.high, c.high);
        bucket.low   = Math.min(bucket.low,  c.low);
        bucket.close = c.close;
      }
    }
    if (bucket) out.push(bucket);
    return out;
  },
};
