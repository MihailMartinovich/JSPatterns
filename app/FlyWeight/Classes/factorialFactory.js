import Factorial from './factorial';

class FactorialFactory {
  constructor() {
    this.calculatedResults = new Map();

    this.calculatedResults.set(0, new Factorial(0, 1)); // factorial of 0! is 1.
  }

  calculate(number) {
    if(number < 0) {
      return null;
    }

    let factorial = this.calculatedResults.get(number);

    factorial = factorial
      ? factorial.value
      : number * this.calculate(number-1);

    if(this.calculatedResults.has(number)) {
      console.log(`Value ${factorial} obtained from Cache for number ${number}.`);
    } else {
      this.calculatedResults.set(number, new Factorial(number, factorial));
    }

    return factorial;
  }
}

export default FactorialFactory;