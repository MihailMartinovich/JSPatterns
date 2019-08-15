const printNode = (node) => {
  let printedTree = `--${node.name}(${node.type})--\n`;

  if(node.children) {
    node.children.forEach(item => {
      printedTree += printNode(item, printedTree);
    });
  }
  
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

  addChild() { }

  removeChildByIndex() { }

  getChildByIndex() {}

  get childrenNumber() {
    return 0;
  }

  static printTree(root) {
    if(!root) {
      return '';
    }

    const printedTree = printNode(root);

    console.log(printedTree);

    return printedTree;
  }
}

export default Node;