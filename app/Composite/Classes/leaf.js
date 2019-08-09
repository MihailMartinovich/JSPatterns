import Node from './node.js';

class Leaf extends Node {
  constructor(name){
    super(name, 'leaf');
  }

  get childrenNumber() {
    return 0;
  }
}

export default Leaf;