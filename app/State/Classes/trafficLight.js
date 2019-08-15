import Green from './green';
import Red from './red';

class TrafficLight {
  constructor(){
    this._states = [new Green(), new Red()];
    [this._currentState] = this._states;
  }

  changeLight() {
    const statesLength = this._states.length;

    const currentStateIndex = this._states.indexOf(this._currentState);
    const nextIndex = currentStateIndex + 1;

    if(nextIndex >= statesLength) {
      [this._currentState] = this._states;
    } else {
      this._currentState = this._states[nextIndex];
    }
  }

  get color() {
    return this._currentState.color;
  }
}

export default TrafficLight;