/**
 * Sets
 */

// set은 중복 항목이 없고 값이 특정 순서가 아닌 경우를 제외하면 배열과 유사하다

class mySet {
  constructor() {
    // the const collection will hold the set
    this.collection = [];
  }
  // this method will check for the presense of an element and return true or false
  has = (element) => {
    return this.collection.indexOf(element) !== -1;
  };
  // this method will return all the values in the set
  values = () => {
    return this.collection;
  };
  // this method will add an element to the set
  add = (element) => {
    if (!this.has(element)) {
      // 중복 항목이 없어야 한다
      this.collection.push(element);
      return true;
    }
    return false;
  };
  // this method will remove an element from a set
  remove = (element) => {
    if (this.has(element)) {
      const index = this.collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  };
  // this method will return the size of the collection
  size = () => {
    return this.collection.length;
  };
  // this method will return the union of two sets
  union = (otherSet) => {
    const unionSet = new mySet();
    const firstSet = this.values();
    const secondSet = otherSet.value();
    firstSet.forEach((e) => {
      unionSet.add(e);
    });
    secondSet.forEach((e) => {
      unionSet.add(e); // add 를 이용하기 때문에 중복 항목은 자연스럽게 거른다
    });
    return unionSet;
  };
  // this method will return the intersection of two sets as a new set
  // 교집합
  intersection = (otherSet) => {
    const intersectionSet = new mySet();
    const firstSet = this.values();
    firstSet.forEach((e) => {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };
  // this method will return the difference of two sets a new set
  difference = (otherSet) => {
    const differenceSet = new mySet();
    const firstSet = this.values();
    firstSet.forEach((e) => {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };
  // this method will test if the set is a subset of a different set
  subset = (otherSet) => {
    const firstSet = this.values();
    return firstSet.every((value) => {
      return otherSet.has(value);
    });
  };
}

const setA = new mySet();
const setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB)); // true
console.log(setA.intersection(setB).values()); // ['a']
console.log(setB.difference(setA).values()); // ['b', 'c', 'd']

const setC = new Set();
const setD = new Set();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");
console.log(setD.values()); // [Set Iterator] {'b', 'c', 'a', 'd'}
// mySet은 values를 실행하면 배열을 반환하지만
// 실제 Set는 Iterator를 반환한다
setD.delete("a");
console.log(setD.has("a")); // false
console.log(setD.add("d")); // Set {'b', 'c', 'd'}
