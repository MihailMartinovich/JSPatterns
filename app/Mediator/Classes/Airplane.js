class Airplane {
  constructor(name, latitude, longitude) {
    this._name = name;
    this._latitude = latitude;
    this._longitude = longitude;
    this._airport = null;
  }

  get name() {
    return this._name;
  }

  register(airport) {
    this._airport = airport;
  }

  get otherAirplanesCoordinates() {
    return this._airport
      ? this._airport.getAirplaneCoordinates(this)
      : null;
  }

  get coordinates() {
    return {
      name: this._name,
      latitude: this._latitude,
      longitude: this._longitude,
    }
  }
}


export default Airplane;