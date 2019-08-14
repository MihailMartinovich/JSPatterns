class Subscriber {
  constructor(name) {
    this._name = name;
    this._publisherValue = null;
  }

  get name() {
    return this._name;
  }

  updateValueFromPublisher = (data) => {
    console.log(`Subscriber "${this.name}" got value "${data}" from Publisher`);
    this._publisherValue = data;
  }
}

export default Subscriber;