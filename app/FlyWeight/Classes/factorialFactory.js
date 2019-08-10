import Factorial from './factorial';

class FactorialFactory {
  constructor() {
    this.calculatedResults = new Map();

    this.calculatedResults.set(0, new Factorial(0, 1)); // factorial of 0! is 1.
  }

  calculate(number) {
    if(!Number.isInteger(number) || (Number.isInteger(number) && number < 0)) {
      return null;
    }

    let existingFactorial = this.calculatedResults.get(number);

    if(existingFactorial) {
      console.log(`Value ${existingFactorial.value} obtained from Cache for number ${existingFactorial.number}.`);

      return existingFactorial;
    } else {
      const value = number * this.calculate(number-1).value;
      const calculatedFactorial = new Factorial(number, value);

      this.calculatedResults.set(number, calculatedFactorial);

      return calculatedFactorial;
    }
  }
}

export default FactorialFactory;