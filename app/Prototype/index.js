import { SkateBoard, ElectricScooter } from './Classes/index.js';

const runPrototypeExample = () => {
  const skate = new SkateBoard(4);
  const scooter = new ElectricScooter(2);

  skate.ride();
  scooter.ride();
};

export default runPrototypeExample;