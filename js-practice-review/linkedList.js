/**
 * Linked list in JS
 */

// list node: contains 2 items -> data and pointer to next node

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// linked list constructor
// if head node is not passed, head defaults to null

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  clear() {
    this.head = null;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  getFirst() {
    return this.head;
  }
}

// create two list nodes with, node 1 with a pointer to node 2

let node1 = new ListNode('node 1');
let node2 = new ListNode('node 2');
let node3 = new ListNode('node 3');

// point node1 to node2
node1.next = node2;

// point node2 to node3
node2.next = node3;

// creating the linked list
let list = new LinkedList(node1);

console.log(list.head.next.data);

/**
 * Linked List Methods
 * size() returns size of linked list
 * clear() clears the linked list
 * getLast() returns last node
 * getFirst() returns first node
 */

console.log(list.size()); // 3
console.log(list.getFirst()); // node 1
console.log(list.getLast()); // node 3
console.log(list.clear()); // bye bye
