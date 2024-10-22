export default class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addNodeFirst(newNode) {
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  addNodeLast(newNode) {
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  addFirst(data) {
    const newNode = { next: null, data: data };
    this.addNodeFirst(newNode);
  }

  addLast(data) {
    const newNode = { next: null, data: data };
    this.addNodeLast(newNode);
  }

  removeFirst() {
    if (!this.head) return null;
    const removedNode = this.head;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    return removedNode.data;
  }

  removeLast() {
    if (!this.head) return null;
    if (this.head === this.tail) {
      const removedNode = this.head;
      this.head = null;
      this.tail = null;
      return removedNode.data;
    }

    let currentNode = this.head;
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }

    const removedNode = this.tail;
    this.tail = currentNode;
    this.tail.next = null;

    return removedNode.data;
  }

  insertAfterNode(newNode, existingNode) {
    if (!existingNode.next) {
      this.addNodeLast(newNode);
    } else {
      newNode.next = existingNode.next;
      existingNode.next = newNode;
    }
  }

  insertAfter(index, data) {
    const existingNode = this.nodeAt(index);
    const newNode = { next: null, data: data };

    this.insertAfterNode(newNode, existingNode);
  }

  nodeAt(index) {
    let count = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (count === index) {
        return currentNode;
      }
      count++;
      currentNode = currentNode.next;
    }

    return null;
  }

  size() {
    let count = 0;
    let currentNode = this.head;

    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }

    return count;
  }

  get(index) {
    const node = this.nodeAt(index);
    return node ? node.data : null;
  }

  first() {
    return this.head ? this.head.data : null;
  }

  last() {
    return this.tail ? this.tail.data : null;
  }

  dumpList() {
    let node = this.head;
    console.log(`
  
            Linked List
            ============
              head: ${this.head?.data}
              tail: ${this.tail?.data}
            ============
          `);

    while (node) {
      console.log(`
    
            Node: ${node.data}
            ----------------
              next: ${node.next?.data}
            `);
      node = node.next;
    }
  }
}

const node1 = {
  next: null,
  data: "C",
};

const node2 = {
  next: null,
  data: "A",
};

const node3 = {
  next: null,
  data: "T",
};

node1.next = node2;
node2.next = node3;
