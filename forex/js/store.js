const Store = {
  getTrades() {
    return JSON.parse(localStorage.getItem('fx_trades') || '[]');
  },

  saveTrade(trade) {
    const trades = this.getTrades();
    trade.id = Date.now();
    trades.push(trade);
    localStorage.setItem('fx_trades', JSON.stringify(trades));
    return trade;
  },

  updateTrade(id, updates) {
    const trades = this.getTrades();
    const idx = trades.findIndex(t => t.id === id);
    if (idx !== -1) {
      trades[idx] = { ...trades[idx], ...updates };
      localStorage.setItem('fx_trades', JSON.stringify(trades));
      return trades[idx];
    }
    return null;
  },

  deleteTrade(id) {
    const trades = this.getTrades().filter(t => t.id !== id);
    localStorage.setItem('fx_trades', JSON.stringify(trades));
  },

  getApiKey() {
    return localStorage.getItem('fx_api_key') || '';
  },

  setApiKey(key) {
    localStorage.setItem('fx_api_key', key.trim());
  },

  getCachedData(key) {
    try {
      const raw = localStorage.getItem('fx_cache_' + key);
      if (!raw) return null;
      const { data, ts } = JSON.parse(raw);
      if (Date.now() - ts > 3600000) return null;
      return data;
    } catch { return null; }
  },

  setCachedData(key, data) {
    try {
      localStorage.setItem('fx_cache_' + key, JSON.stringify({ data, ts: Date.now() }));
    } catch {
      this.clearCache();
      try { localStorage.setItem('fx_cache_' + key, JSON.stringify({ data, ts: Date.now() })); } catch {}
    }
  },

  clearCache() {
    Object.keys(localStorage)
      .filter(k => k.startsWith('fx_cache_'))
      .forEach(k => localStorage.removeItem(k));
  },
};
