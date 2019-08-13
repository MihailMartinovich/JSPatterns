import {
  Airplane,
  Airport
} from './Classes/index.js';

const runMediatorExample = () => {
  const airport = new Airport('Airport');

  const airplane1 = new Airplane('Airplane 1');
  const airplane2 = new Airplane('Airplane 2');
  const airplane3 = new Airplane('Airplane 3');

  airport.register(airplane1, 10, 20);
  airport.register(airplane2, 20, 30);
  airport.register(airplane3, 30, 40);

  console.log(airplane1.name, 'got coordinates', airplane1.otherAirplanesCoordinates);
  console.log(airplane2.name, 'got coordinates', airplane2.otherAirplanesCoordinates);
  console.log(airplane3.name, 'got coordinates', airplane3.otherAirplanesCoordinates);
}

export default runMediatorExample;