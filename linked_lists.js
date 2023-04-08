const { Node, DoublyLinkedNode } = require('./Node');


// SINGLY LINKED LIST

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
  
  removeTail() {
    if (!this.#head) return;
    if (!this.#head.getNextNode()) {
      this.#head.setNextNode(null);
      this.#head = null;
    }
    
    let currentNode = this.#head;
    while (currentNode.getNextNode().getNextNode()) {
      currentNode = currentNode.getNextNode();
    }
    currentNode.setNextNode(null);
    
    this.#length--;
  }
  
  removeNode(data) {
    if (!this.#head) return;
    let node = this.#head;
    let previousNode = null;

    while (node !== null) {
        if (node.getData() === data) break;
        previousNode = node;
        node = node.getNextNode();
    }

    if (previousNode === null) {
        this.#head = node.getNextNode();
        node.setNextNode(null);
    } else {
        previousNode.setNextNode(node.getNextNode());
        node.setNextNode(null);
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
  
  nthLastNode(n) {
    tailPointer = this.#head;
    nthLastNodePointer = null;
    let count = 0;

    while (tailPointer) {
      tailPointer = tailPointer.getNextNode();
      if (count >= n) {
        nthLastNodePointer === null ? nthLastNodePointer = this.#head.getNextNode() : nthLastNodePointer = nthLastNodePointer.getNextNode();
      }
      count++;
    }

    return nthLastNodePointer;
  };
  
  findMiddle () {
    let fastPointer = this.#head;
    let slowPointer = this.#head;
    
    while (fastPointer) {
      fastPointer = fastPointer.getNextNode();
      if (fastPointer) {
        fastPointer = fastPointer.getNextNode();
        slowPointer = slowPointer.getNextNode();
      }
    }
    
    return slowPointer;
  }
  
  reverse() {
    let prevNode = null;
    let currentNode = this.head;
    let nextNode = null;

    while (currentNode !== null) {
      nextNode = currentNode.getNextNode(); 
      currentNode.setNextNode(prevNode); 
      prevNode = currentNode; 
      currentNode = nextNode; 
    }

    this.head = prevNode;
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


// DOUBLY LINKED LIST

class DoublyLinkedList {
  constructor() {
    this.#head = null;
    this.#tail = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.#head;
    if (currentHead) {
      currentHead.setPreviousNode(newHead);
      newHead.setNextNode(currentHead);
    }
    this.#head = newHead;
    if (!this.#tail) {
      this.#tail = newHead;
    }
  }

  addToTail(data) {
    const newTail = new Node(data);
    const currentTail = this.#tail;
    if (currentTail) {
      currentTail.setNextNode(newTail);
      newTail.setPreviousNode(currentTail);
    }
    this.#tail = newTail;
    if (!this.#head) {
      this.#head = newTail;
    }
  }

  removeHead() {
    const removedHead = this.#head;
    if (!removedHead) {
      return;
    }
    this.#head = removedHead.getNextNode();
    if (this.#head) {
      this.#head.setPreviousNode(null);
    }
    if (removedHead === this.#tail) {
      this.removeTail();
    }
    return removedHead.getData();
  }

  removeTail() {
    const removedTail = this.#tail;
    if (!removedTail) {
      return;
    }
    this.#tail = removedTail.getPreviousNode();
    if (this.#tail) {
      this.#tail.setNextNode(null);
    }
    if (removedTail === this.#head) {
      this.removeHead();
    }
    return removedTail.getData();
  }

  removeByData(data) {
    let nodeToRemove;
    let currentNode = this.#head;
    while (currentNode !== null) {
      if (currentNode.getData() === data) {
        nodeToRemove = currentNode;
        break;
      }
      currentNode = currentNode.getNextNode();
    }
    if (!nodeToRemove) {
      return null;
    }
    if (nodeToRemove === this.#head) {
      this.removeHead();
    } else if (nodeToRemove === this.#tail) {
      this.removeTail();
    } else {
      const nextNode = nodeToRemove.getNextNode();
      const previousNode = nodeToRemove.getPreviousNode();
      nextNode.setPreviousNode(previousNode);
      previousNode.setNextNode(nextNode);
    }
    return nodeToRemove;
  }

  printList() {
    let currentNode = this.#head;
    let output = '<head> ';
    while (currentNode !== null) {
      output += currentNode.getData() + ' ';
      currentNode = currentNode.getNextNode();
    }
    output += '<tail>';
    console.log(output);
  }
}

const subway = new DoublyLinkedList();

subway.addToHead('TimesSquare');
subway.addToHead('GrandCentral');
subway.addToHead('CentralPark');

subway.addToTail('PennStation');
subway.addToTail('WallStreet');
subway.addToTail('BrooklynBridge');

subway.removeHead();
subway.removeTail();

subway.removeByData('TimesSquare');
subway.printList();

module.exports = {
  LinkedList,
  DoublyLinkedList
};
