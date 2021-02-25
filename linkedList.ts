class myNode {
  data: number;
  childNode: myNode | null;

  constructor(data: number, childNode?: myNode) {
    this.data = data;
    this.childNode = childNode || null;
  }
}

const nodeD = new myNode(2);
const nodeC = new myNode(10, nodeD);
const nodeB = new myNode(3, nodeC);
const nodeA = new myNode(2, nodeB);
const head = new myNode(4, nodeA);

const isNode = (node: myNode | null) => node instanceof myNode;
const hasChild = (node: myNode | null) =>
  node!.childNode !== null && isNode(node!.childNode);

const countNodes = (node: myNode) => {
  const iter = (node: myNode | null, counter: number): any => {
    if (isNode(node) && !hasChild(node)) return counter;

    return iter(node!.childNode, counter + 1);
  };

  return iter(node, 1);
};
