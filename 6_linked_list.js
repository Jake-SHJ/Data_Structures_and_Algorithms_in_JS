/**
 * Linked List
 */

// 요소가 노드에 저장되는 공통 데이터 구조
// 구성 요소는 요소 자체와 다음 노드에 대한 참조를 가짐
// 배열은 고정된 크기지만 linked list는 동적으로 크기가 조절됨
// 배열에 비해 효율적인 삽입과 삭제 하지만 인덱싱은 배열이 더 효율적
// 배열은 메모리 낭비가 발생 가능(고정된 크기, 필요한 크기보다 더 크게 생성될 가능성 높음), 그에 비해 linked list는 메모리 낭비는 발생하지 않음
// 배열은 연속적인 메모리 저장으로 순차 접근이 빠름, 그에 비해 linked list는 느림

function Node(element) {
  this.element = element;
  this.next = null;
}
class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  size = () => {
    return this.length;
  };

  head = () => {
    return this.head;
  };

  add = (element) => {
    const node = new Node(element);

    if (this.head == null) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }

    this.length++;
  };

  remove = (element) => {
    let currentNode = this.head;
    let previousNode;

    if (currentNode.element === element) {
      this.head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }

    this.length--;
  };

  isEmpty = () => {
    return this.length === 0;
  };

  indexOf = (element) => {
    let currentNode = this.head;
    let index = -1;

    while (currentNode) {
      index++;
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }

    return -1;
  };

  elementAt = (index) => {
    let currentNode = this.head;
    let count = 0;

    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }

    return currentNode.element;
  };

  addAt = (index, element) => {
    const node = new Node(element);

    let currentNode = this.head;
    let previousNode;
    let currentIndex = 0;

    if (index > this.length) {
      return false;
    }

    if (index === 0) {
      node.next = currentNode;
      this.head = node;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    this.length++;
  };

  removeAt = (index) => {
    let currentNode = this.head;
    let previousNode;
    let currentIndex = 0;

    if (index < 0 || index >= this.length) {
      return null;
    }

    if (index === 0) {
      this.head = currentNode.next;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }

    this.length--;
    return currentNode.element;
  };
}

const conga = new LinkedList();
conga.add("Kitten");
conga.add("Puppy");
conga.add("Dog");
conga.add("Cat");
conga.add("Fish");
console.log(conga.size());
console.log(conga.removeAt(3));
console.log(conga.elementAt(3));
console.log(conga.indexOf("Puppy"));
console.log(conga.size());
