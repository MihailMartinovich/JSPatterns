import {
  StrategyManager,
  Algorythm1,
  Algorythm2,
} from './Classes/index';

const runStrategyExample = () => {
  const strategyManager = new StrategyManager();

  console.log('StrategyManager is set to Algorythm1');
  strategyManager.setStrategy(Algorythm1);
  strategyManager.execute('arg1', 'arg2');

  console.log('StrategyManager is set to Algorythm2');
  strategyManager.setStrategy(Algorythm2);
  strategyManager.execute('arg3', 'arg4');
};

export default runStrategyExample;