/**
 * Queues
 */

// 배열을 통해 쉽게 구현이 가능
// stack과 반대로 들어온 순서대로 나감 (선입선출)
class Queue {
  constructor() {
    this.collection = [];
  }
  print = () => {
    console.log(this.collection);
  };
  enqueue = (element) => {
    this.collection.push(element);
  };
  dequeue = () => {
    return this.collection.shift();
  };
  front = () => {
    return this.collection[0];
  };
  size = () => {
    return this.collection.length;
  };
  isEmpty = () => {
    return this.collection.length === 0;
  };
}

const q = new Queue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.print();
q.dequeue();
console.log(q.front());
q.print();

// 우선 순위를 부여한 queue의 구현
class PriorityQueue {
  constructor() {
    this.collection = [];
  }
  printCollection = () => {
    console.log(this.collection);
  };
  enqueue = (element) => {
    if (this.isEmpty()) {
      this.collection.push(element);
    } else {
      let added = false;
      for (const a of this.collection) {
        if (element[1] < a[1]) {
          // 우선순위를 확인
          this.collection.splice(this.collection.indexOf(a), 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(element);
      }
    }
  };
  dequeue = () => {
    const value = this.collection.shift();
    return value[0]; // 우선순위를 제거한 값만 반환
  };
  front = () => {
    return this.collection[0]; // 이건 우선순위도 반환
  };
  size = () => {
    return this.collection.length;
  };
  isEmpty = () => {
    return this.collection.length === 0;
  };
}

const pq = new PriorityQueue();
pq.enqueue(["Beau Carnes", 2]);
pq.enqueue(["Quincy Larson", 3]);
pq.enqueue(["Ewa Mitulska-Wójcik", 1]);
pq.enqueue(["Briana Swift", 2]);
pq.printCollection();
pq.dequeue();
console.log(pq.front());
pq.printCollection();
