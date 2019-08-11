
class Iterator {
  constructor(collection) {
    this._index = 0;
    this._collection = collection;
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if(!this._collection) {
          return {
            value: null,
            done: true,
          }
        }

        if(this._index < this._collection.length) {
          return {
            value: this._collection[this._index++],
            done: false,
          }
        } else {
          this._index = 0;

          return {
            value: null,
            done: true,
          }
        }
      },
      curerent: () => {
        if(!this._collection || this._index > this._collection.length) {
          this._index = 0;

          return {
            value: null,
            done: true,
          }
        } else {
          return {
            value: this._collection[this._index],
            done: false,
          }
        }
      },
      first: () => {
        if(!this._collection || this._collection.length) {
          return {
            value: null,
            done: true,
          }
        } else {
          return {
            value: this._collection[0],
            done: false,
          }
        }
      }
    }
  }
}

export default Iterator;