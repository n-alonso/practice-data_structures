const Node = require('./Node');

class LinkedList {
  constructor() {
    #head = null;
    #length = 0;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.#head;
    this.#head = newHead;
    if (currentHead) {
      this.#head.setNextNode(currentHead);
    }
    this.#length++;
  }

  addToTail(data) {
    let tail = this.#head;
    if (!tail) {
      this.#head = new Node(data);
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
    this.#length++;
  }

  removeHead() {
    if (!this.#head) return;
    const removedHead = this.#head;
    this.#head = removedHead.getNextNode();
    this.#length--;
  }
  
  removeNode(data) {
    if (!this.#head) return;
    let node = this.#head
    let previousNode = null

    while (node !== null) {
        if (node.getData() === data) break
        previousNode = node
        node = node.getNextNode()
    }

    if (previousNode === null) {
        this.#head = node.getNextNode()
        node.setNextNode(null)
    } else {
        previousNode.setNextNode(node.getNextNode())
        node.setNextNode(null)
    }
    
    this.#length--;
  }
  
  getSize() {
    console.log(`length: ${this.#length}`);
    return this.#length;
  }
  
  find(value) {
    if (!this.#head) return;
    let currentNode = this.#head;
    
    while (currentNode) {
      if (currentNode.getData() === value) return currentNode;
      currentNode = currentNode.getNextNode();
    }
    
    return null;
  }

  printList() {
    let currentNode = this.#head;
    let output = '<head> ';
    
    while (currentNode !== null) {
      output += currentNode.getData() + ', ';
      currentNode = currentNode.getNextNode();
    }
    
    output += '<tail>';
    console.log(output);
  }
  
  swapNodes(data1, data2) {
    if (!this.#head) return;
    if (data1 === data2) return;

    let node1Previous = null;
    let node2Previous = null;
    let node1 = this.#head;
    let node2 = this.#head;

    while (node1 !== null) {
        if (node1.getData() === data1) break;
        node1Previous = node1;
        node1 = node1.getNextNode();
    }
    while (node2 !== null) {
        if (node2.getData() === data2) break;
        node2Previous = node2;
        node2 = node2.getNextNode();
    }

    if (node1 === null || node2 === null) return;

    node1Previous === null ? this.#head = node2 : node1Previous.setNextNode(node2);
    node2Previous === null ? this.#head = node1 : node2Previous.setNextNode(node1);

    let temp = node1.getNextNode();
    node1.setNextNode(node2.getNextNode());
    node2.setNextNode(temp);
  }
}

const seasons = new LinkedList();

seasons.getSize();
seasons.addToHead('summer');
seasons.addToHead('spring');
seasons.printList();
seasons.addToTail('fall');
seasons.addToTail('winter');
seasons.printList();
seasons.find('summer');
seasons.getSize()
seasons.removeHead();
seasons.getSize()
seasons.printList();

module.exports = LinkedList;
