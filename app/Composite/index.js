import { Composite, Leaf, Node } from './Classes/index.js';

const runCompositeExample = () => {
  const root = new Composite('root');
  const leftLeaf = new Leaf('leftLeaf');
  const rightComposite = new Composite('rightComposite');

  root.addChild(leftLeaf);
  root.addChild(rightComposite);

  rightComposite.addChild(new Leaf('leafOfComposite'));
  rightComposite.addChild(new Composite('compositeOfComposite1'));
  rightComposite.addChild(new Composite('compositeOfComposite2'));

  Node.printTree(root);
  Node.printTree(rightComposite);
};

export default runCompositeExample;