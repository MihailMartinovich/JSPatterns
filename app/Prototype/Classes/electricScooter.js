import types from '../Constants/types.js';
import SkateBoard from './skateBoard.js';

function ElectricScooter(wheelsNumber) {
  SkateBoard.call(this, wheelsNumber, types.ELECTRIC_SCOOTER);
}

ElectricScooter.prototype = Object.create(SkateBoard.prototype, {
  ride: {
    value: function() {
      this.turnEngineOn();
      SkateBoard.prototype.ride.apply(this, arguments);
    }, 
    enumerable: true, 
    configurable: true, 
    writable: true
  },
  turnEngineOn: {
    value: function() {
      console.log(`${ this.type.description }'s engine is turned on.`);
    }, 
    enumerable: true, 
    configurable: true, 
    writable: true
  }
});

ElectricScooter.prototype.constructor = SkateBoard;

export default ElectricScooter;