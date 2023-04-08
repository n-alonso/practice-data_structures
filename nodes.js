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


// DOUBLY LINKED NODE

class DoublyLinkedNode {
  constructor(data) {
    this.#data = data
    this.#next = null
    this.#previous = null
  }
  
  getNextNode() {
    return this.#next
  }
  
  getPreviousNode() {
    return this.#previous
  }
  
  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.#next = node;
    } else {
      throw new Error('Next node must be an instance of the Node class.');
    }
  }
  
  setPreviousNode(node) {
    if (node instanceof Node || node === null) {
      this.#previous = node;
    } else {
      throw new Error('Previous node must be an instance of the Node class.');
    }
  }
}


// PRACTICE USAGE

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
