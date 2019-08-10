import Calculator from './calculator'

const runChainOfResponsibilityExample = () => {
  const calc = new Calculator(0);

  calc.add(10).sub(2).div(4).multiply(5);

  console.log('Chain of Resposibility');
  console.log('((0 + 10 - 2)/4)*5: ', calc.number);
};

export default runChainOfResponsibilityExample;