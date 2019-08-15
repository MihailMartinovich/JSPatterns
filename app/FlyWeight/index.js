import {
  FactorialFactory
} from './Classes/index.js';



const runFlyWeightExample = () => {
  const factorialFactory = new FactorialFactory();

  const printFactorial = (number) => {
    const factorial = factorialFactory.calculate(number);
    console.log(`Factorial for number ${number} is `, factorial);
  };

  printFactorial(-10);
  printFactorial(0);
  printFactorial(13);
  printFactorial(10);
  printFactorial(9);
  printFactorial(12);
  printFactorial(-5);
  printFactorial(0);
};

export default runFlyWeightExample;