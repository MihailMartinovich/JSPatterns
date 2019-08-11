class IteratorWithGenerator {
  constructor(collection) {
    if(!collection) {
      return null;
    }

    let index = 0;

    return (function*() {
      while(index < collection.length) {
        yield collection[index++];
      }
    })()
  }
}

export default IteratorWithGenerator;