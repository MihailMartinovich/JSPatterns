function readonly(value) {
  return function(target, key, descriptor) {
    descriptor.writable = !value;
    
    return descriptor;
  }
}

class Book {
  constructor(title, text) {
    this._text = text;
    this._title = title;
  }

  @readonly(true)
  author = 'Jack London';

  get text() {
    return this._text;
  }

  get title() {
    return this._title;
  }

  set text(text) {
    this._text = text;
  }

  set title(title) {
    this._title = title;
  }
}

export default Book;