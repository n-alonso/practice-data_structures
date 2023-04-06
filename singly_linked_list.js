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
    const removedHead = this.#head;
    if (!removedHead) {
      return;
    }
    this.#head = removedHead.getNextNode();
    this.#length--;
    return removedHead.getData();
  }
  
  getSize() {
    console.log(`length: ${this.#length}`);
    return this.#length;
  }
  
  find(value) {
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
