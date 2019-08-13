class Airport {
  constructor(name) {
    this._name = name;
    this._airplanes = new Set();
  }

  register(airplane) {
    if(airplane) {
      this._airplanes.add(airplane);
      airplane.register(this);
    }
  }

  getAirplaneCoordinates(currentAirplane) {
    const otherAirplanes = [...this._airplanes].filter(airplane => airplane !== currentAirplane);
    const coordinates = otherAirplanes.map(airplane => airplane.coordinates);

    return coordinates;
  }
}

export default Airport;