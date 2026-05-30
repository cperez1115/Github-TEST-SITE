const PnL = {
  pipCfg: {
    XAUUSD: { ps: 0.1,    lv: 100    },
    XAGUSD: { ps: 0.001,  lv: 5000   },
    EURUSD: { ps: 0.0001, lv: 10     },
    GBPUSD: { ps: 0.0001, lv: 10     },
    AUDUSD: { ps: 0.0001, lv: 10     },
    NZDUSD: { ps: 0.0001, lv: 10     },
    USDCAD: { ps: 0.0001, lv: 10     },
    USDCHF: { ps: 0.0001, lv: 10     },
    USDJPY: { ps: 0.01,   lv: 10     },
    EURJPY: { ps: 0.01,   lv: 10     },
    GBPJPY: { ps: 0.01,   lv: 10     },
  },

  _cfg(pair) {
    return this.pipCfg[pair] || { ps: 0.0001, lv: 10 };
  },

  calc(pair, dir, entry, sl, tp, lots) {
    const { ps, lv } = this._cfg(pair);
    const rPips = Math.abs(entry - sl) / ps;
    const wPips = Math.abs(tp - entry) / ps;
    const rDol  = rPips * lv * lots;
    const wDol  = wPips * lv * lots;
    const rr    = rDol > 0 ? wDol / rDol : 0;
    return {
      riskPips:   rPips.toFixed(1),
      rewardPips: wPips.toFixed(1),
      riskDol:    rDol.toFixed(2),
      rewardDol:  wDol.toFixed(2),
      rr:         rr.toFixed(2),
    };
  },

  result(pair, dir, entry, exit, lots) {
    const { ps, lv } = this._cfg(pair);
    const mult = dir === 'BUY' ? 1 : -1;
    const pips = mult * (exit - entry) / ps;
    const dol  = pips * lv * lots;
    return { pips: parseFloat(pips.toFixed(1)), dol: parseFloat(dol.toFixed(2)) };
  },
};
