class Node {
  constructor(data) {
    this.name = data;
    this.next = null;
  }
}

function getLength(node) {
  let length = 0;
  while (node) {
    length++;
    node = node.next;
  }
  return length;
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

export default class SLinkedList {
  constructor(data) {
    let temp = new Node(data);
    this.head = temp;
    this.tail = temp;
    this.length = 1;
  }

  len() {
    return this.length;
  }

  insertFront(data) {
    if(data===""){
      return alert("Please enter a number")
    }
    data = parseInt(data);
    if(data<-1|| data>8){
      return alert(
        "Please only enter number between 1 to 8"
      );
    }
    let temp = new Node(data);
    temp.next = this.head;
    this.head = temp;
    this.tail = temp.next;
    this.length += 1;
  }

  insertBack(data) {
    if(data===""){
      return alert("Please enter a number")
    }
    data = parseInt(data);
    if(data<-2 || data>8){
      return alert(
        "Please only enter number between 1 to 8"
      );
    }
    let temp = new Node(data);
    this.tail.next = temp;
    this.tail = this.tail.next;
    this.length += 1;
  }

  insertAt(index, data) {
    index = parseInt(index);
    if(data===""){
      return alert("Please enter a number")
    }
    data = parseInt(data);
    if(data<=0 || data>8){
      return alert(
        "Please only enter number between 1 to 8"
      );
    }
    if (index === 0) {
      this.insertFront(data);
      return;
    } else if (index >= this.length) {
      this.insertBack(data);
      return;
    } else {
      let temp = this.head;
      let prev = null;
      while (index) {
        prev = temp;
        temp = temp.next;
        index--;
      }
      let t = new Node(data);
      t.next = temp;
      prev.next = t;
    }
    this.length += 1;
  }

  delete(value) {
    value = parseInt(value);
    let temp = this.head;
    if (temp.name === value) {
      return (this.head = temp.next ? temp.next : null);
    }
    while (temp.next && temp.next.name !== value) {
      temp = temp.next;
    }
    if (!temp.next) {
      return alert("Element not found");
    }
    temp.next = temp.next.next ? temp.next.next : null;
    this.length--;
  }



  checkAdjacentSumPrimes(head) {
    let current = head;
    if (getLength(head) < 7) {
      return false;
    }
    while (current && current.next) {
      let sum = current.name + current.next.name;
      if (!isPrime(sum)) {
        return false;
      }
      current = current.next;
    }
    return true;
  }



  reverse(q, p) {
    if (p !== null) {
      this.reverse(p, p.next);
      p.next = q;
    } else {
      this.head = q;
    }
  }

  display() {
    return this.head;
  }
}
