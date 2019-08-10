import {
  Factorial,
  FactorialFactory
} from './Classes/index.js';

const runFlyWeightExample = () => {
  const factorialFactory = new FactorialFactory();

  console.log('Factorial for number -10', factorialFactory.calculate(-10));
  console.log('Factorial for number 0', factorialFactory.calculate(0));
  console.log('Factorial for number 13', factorialFactory.calculate(13));
  console.log('Factorial for number 10', factorialFactory.calculate(10));
  console.log('Factorial for number 9', factorialFactory.calculate(9));
  console.log('Factorial for number 12', factorialFactory.calculate(12));
  console.log('Factorial for number -5', factorialFactory.calculate(-5));
  console.log('Factorial for number 0', factorialFactory.calculate(0));
};

export default runFlyWeightExample;