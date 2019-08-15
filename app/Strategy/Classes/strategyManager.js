class StrategyManager {
  constructor(){
    this._strategy = null;
  }

  setStrategy(strategy) {
    this._strategy = strategy;
  }

  execute(...args) {
    if(!this._strategy) {
      return;
    }

    this._strategy.execute(...args);
  }
}

export default StrategyManager;