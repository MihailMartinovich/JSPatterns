import types from '../Constants/types.js';

function SkateBoard(wheelsNumber, type) {
  this.wheelsNumber = wheelsNumber;
  this.type = type || types.SKATEBOARD;
}

SkateBoard.prototype = {
  wheelsNumber: 0,
  ride: function() {
    console.log(`Ride on ${ this.type.description } on ${this.wheelsNumber} wheels`)
  }
}

export default SkateBoard;