/**
 * Heaps
 */

// left child: i * 2
// right child: i * 2 + 1
// parent: i / 2

// binary heap은 heap 속성을 충족하는 부분적으로 정렬된 이진 트리
// MaxHeap은 상위에 가장 큰 숫자 최하위에 가장 작은 숫자
// MinHeap은 모든 하위 노드가 상위 노드보다 크거나 같음

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  insert = (num) => {
    this.heap.push(num);
    if (this.heap.length > 2) {
      let idx = this.heap.length - 1;
      const PARENT_NODE = Math.floor(idx / 2);
      while (this.heap[idx] < this.heap[PARENT_NODE]) {
        if (idx >= 1) {
          [this.heap[PARENT_NODE], this.heap[idx]] = [
            this.heap[idx],
            this.heap[PARENT_NODE],
          ];
          if (PARENT_NODE > 1) {
            idx = PARENT_NODE;
          } else {
            break;
          }
        }
      }
    }
  };

  remove = () => {
    let smallest = this.heap[1];
    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);
      if (this.heap.length == 3) {
        if (this.heap[1] > this.heap[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        }
        return smallest;
      }
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;
      while (
        this.heap[i] >= this.heap[left] ||
        this.heap[i] >= this.heap[right]
      ) {
        if (this.heap[left] < this.heap[right]) {
          [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
          i = 2 * i;
        } else {
          [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
          i = 2 * i + 1;
        }
        left = 2 * i;
        right = 2 * i + 1;
        if (this.heap[left] == undefined || this.heap[right] == undefined) {
          break;
        }
      }
    } else if (this.heap.length == 2) {
      this.heap.splice(1, 1);
    } else {
      return null;
    }
    return smallest;
  };

  sort = () => {
    let result = new Array();
    while (this.heap.length > 1) {
      result.push(this.remove());
    }
    return result;
  };
}

class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  print = () => this.heap;

  insert = (num) => {
    this.heap.push(num);
    if (this.heap.length > 2) {
      let idx = this.heap.length - 1;
      const PARENT_NODE = Math.floor(idx / 2);
      while (this.heap[idx] > this.heap[PARENT_NODE]) {
        if (idx >= 1) {
          [this.heap[PARENT_NODE], this.heap[idx]] = [
            this.heap[idx],
            this.heap[PARENT_NODE],
          ];
          if (PARENT_NODE > 1) {
            idx = PARENT_NODE;
          } else {
            break;
          }
        }
      }
    }
  };

  remove = () => {
    let smallest = this.heap[1];
    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);
      if (this.heap.length == 3) {
        if (this.heap[1] < this.heap[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        }
        return smallest;
      }
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;
      while (
        this.heap[i] <= this.heap[left] ||
        this.heap[i] <= this.heap[right]
      ) {
        if (this.heap[left] > this.heap[right]) {
          [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
          i = 2 * i;
        } else {
          [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
          i = 2 * i + 1;
        }
        left = 2 * i;
        right = 2 * i + 1;
        if (this.heap[left] == undefined || this.heap[right] == undefined) {
          break;
        }
      }
    } else if (this.heap.length == 2) {
      this.heap.splice(1, 1);
    } else {
      return null;
    }
    return smallest;
  };
}
