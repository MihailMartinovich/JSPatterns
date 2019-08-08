import Sun from './singleton.js';

const runSingletonExample = () => {
  const smallSun = new Sun('small');

  console.log('Small sun size is ', smallSun.getSize());

  const bigSun = new Sun('big');

  console.log('Big sun size is ', bigSun.getSize());

  console.log('bigSun === smallSun is ', bigSun === smallSun);
};

export default runSingletonExample;