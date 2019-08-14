import {
  TrafficLight
} from './Classes/index';

const runStateExample = () => {
  const trafficLight = new TrafficLight();

  console.log('Traffic Light Color: ', trafficLight.color);
  trafficLight.changeLight();
  console.log('Traffic Light Color: ', trafficLight.color);
  trafficLight.changeLight();
  console.log('Traffic Light Color: ', trafficLight.color);
  trafficLight.changeLight();
  console.log('Traffic Light Color: ', trafficLight.color);
  trafficLight.changeLight();
  console.log('Traffic Light Color: ', trafficLight.color);
};

export default runStateExample;