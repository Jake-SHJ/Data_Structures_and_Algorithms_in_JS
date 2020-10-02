/**
 * Hash Table
 */

// 해시 테이블은 map 데이터 구조 또는 객체를 구현하는 일반적인 방법
// search, insert, delete에 대하여 O(1)의 매우 빠른 속도를 가짐
// 키 입력을 받아 해시 함수를 통해 실행
// 문자열을 숫자로 매핑하고 숫자는 배열의 인덱스에 할당
// 하나의 해시에는 하나의 키만 할당해야 함

// 참고 자료
// https://velog.io/@cyranocoding/Hash-Hashing-Hash-Table%ED%95%B4%EC%8B%9C-%ED%95%B4%EC%8B%B1-%ED%95%B4%EC%8B%9C%ED%85%8C%EC%9D%B4%EB%B8%94-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0%EC%9D%98-%EC%9D%B4%ED%95%B4-6ijyonph6o

const hash = (string, max) => {
  let hash = 0;
  for (const a of string) {
    hash += string.charCodeAt(string.indexOf(a));
  }
  return hash % max;
};

class HashTable {
  constructor() {
    this.storage = [];
    this.storageLimit = 14;
  }

  print = () => {
    console.log(this.storage);
  };

  add = (key, value) => {
    const index = hash(key, this.storageLimit);
    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, value]];
    } else {
      let inserted = false;
      for (let i = 0; i < storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        this.storage[index].push([key, value]);
      }
    }
  };

  remove = (key) => {
    const index = hash(key, this.storageLimit);
    if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
      delete this.storage[index];
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          delete this.storage[index][i];
        }
      }
    }
  };

  lookup = (key) => {
    const index = hash(key, this.storageLimit);
    if (this.storage[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return this.storage[index][i][1];
        }
      }
    }
  };
}

console.log(hash("quincy", 10));

let ht = new HashTable();
ht.add("beau", "person");
ht.add("fido", "dog");
ht.add("rex", "dinosour");
ht.add("tux", "penguin");
console.log(ht.lookup("tux"));
ht.print();
