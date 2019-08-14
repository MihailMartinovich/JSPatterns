class Publisher {
  constructor(name){
    this._name = name;
    this._subscribers = new Map();
  }

  subscribe(subscriber, method) {
    if(!subscriber || !method) {
      return;
    }

    this._subscribers.set(subscriber, method);
  }

  get name() {
    return this._name;
  }

  fire(event, data) {
    console.log('Publisher ', this.name, ' fired event ', event);

    [...this._subscribers].forEach(item => {
      const subscriber = item[0];
      const method = item[1];

      console.log('Publisher ', this.name, ` notifies subscriber "${subscriber.name}" about event "${event}" and passes data:`, data);
      method(data);
    })
  }
}

export default Publisher;