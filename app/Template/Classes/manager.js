import Employee from './employee';

class Manager extends Employee {
  constructor(name, rate) {
    super(name);

    this._rate = rate;
  }

  get rate() {
    return this._rate;
  }
}

export default Manager;