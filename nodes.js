class Node {
  constructor(data) {
    #data = data;
    #next = null;
  }
  
  getData() {
    return this.#data
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.#next = node;
    } else {
      throw new Error('Next node must be an instance of the Node class.');
    }
  }

  getNextNode() {
    return this.#next;
  }
}

const strawberryNode = new Node('Berry Tasty')
const vanillaNode = new Node('Vanilla')
const coconutNode = new Node('Coconuts for Coconut')

vanillaNode.setNextNode(strawberryNode)
strawberryNode.setNextNode(coconutNode)

let currentNode = vanillaNode
while(currentNode !== null) {
  console.log(currentNode.data)
  currentNode = currentNode.getNextNode()
}

module.exports = Node;
