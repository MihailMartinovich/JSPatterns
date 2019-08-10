class Calculator {
  constructor(number) {
    this.number = number;
  }

  add(number) {
    this.number += number;

    return this;
  }

  sub(number){
    this.number -= number;

    return this;
  }

  multiply(number) {
    this.number *= number;

    return this;
  }

  div(number) {
    this.number /= number;

    return this;
  }
}

export default Calculator;