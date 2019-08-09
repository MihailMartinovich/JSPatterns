const printNode = (node) => {
  let printedTree = `--${node.name}(${node.type})--\n`;

  node.children && node.children.forEach(item => {
    printedTree += printNode(item, printedTree);
  });
  
  return printedTree;
}

class Node {
  constructor(name, type) {
    this._name = name;
    this._type = type;
  }

  get name() {
    return this._name;
  }

  get type() {
    return this._type;
  }

  addChild(child) { }

  removeChildByIndex(index) { }

  getChildByIndex(index) {}

  get childrenNumber() {}

  static printTree(root) {
    if(!root) {
      return;
    }

    const printedTree = printNode(root);

    console.log(printedTree);

    return printedTree;
  }
}

export default Node;