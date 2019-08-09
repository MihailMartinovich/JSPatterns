import Node from './node.js';

class Composite extends Node {
  constructor(name) {
    super(name, 'composite');

    this.children = []
  }

  get childrenNumber() {
    return this.children.length;
  }

  addChild(child) {
    this.children.push(child);
  }

  removeChildByIndex(index) {
    return this.children.splice(index, 1);
  }

  getChildByIndex(index) {
    return this.children[index];
  }
}

export default Composite;