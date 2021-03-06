/**
 * Binary Search Tree
 */

// left node 는 parent node 보다 작고,
// right node 는 parent node 보다 크다. 즉, 중복이 없다
// 조회, 삽입, 삭제는 트리에 저장된 항목 수의 로그에 비례하여 시간이 걸린다
// 이진 검색 트리는 선형 구조보다 훨씬 낫지만 해시 테이블보다는 느리다
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = (node) => {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      return false;
    }
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (node === null) {
        return null;
      }
      if (data === node.data) {
        if (node.left === null && node.right === null) {
          return null;
        }
        if (node.left === null) {
          return node.right;
        }
        if (node.right === null) {
          return node.left;
        }
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }

  // 여기까지 4강 내용

  isBalanced() {
    return this.findMinHeight() >= this.findMaxHeight() - 1;
  }

  // 트리의 높이는 Root node에서 주어진 Leaf node 까지의 거리

  findMinHeight(node = this.root) {
    if (node === null) {
      return -1;
    }
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  findMaxHeight(node = this.root) {
    if (node === null) {
      return -1;
    }
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  inOrder() {
    if (this.root === null) {
      return null;
    } else {
      let result = new Array();
      const traverseInOrder = (node) => {
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      };
      traverseInOrder(this.root);
      return result;
    }
  }

  preOrder() {
    if (this.root === null) {
      return null;
    } else {
      let result = new Array();
      const traversePreOrder = (node) => {
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      };
      traversePreOrder(this.root);
      return result;
    }
  }

  postOrder() {
    if (this.root === null) {
      return null;
    } else {
      let result = new Array();
      const traversePostOrder = (node) => {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      };
      traversePostOrder(this.root);
      return result;
    }
  }

  levelOrder() {
    let result = [];
    let Q = [];
    if (this.root !== null) {
      Q.push(this.root);
      while (Q.length > 0) {
        let node = Q.shift();
        result.push(node.data);
        if (node.left !== null) {
          Q.push(node.left);
        }
        if (node.right !== null) {
          Q.push(node.right);
        }
      }
      return result;
    } else {
      return null;
    }
  }
}

const bst = new BST();

// bst.add(4);
// bst.add(2);
// bst.add(6);
// bst.add(1);
// bst.add(3);
// bst.add(5);
// bst.add(7);
// bst.remove(4);
// console.log(bst.findMin()); // 1
// console.log(bst.findMax()); // 7
// bst.remove(7);
// console.log(bst.findMax()); // 6
// console.log(bst.isPresent(4)); // false

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);

console.log(bst.findMinHeight()); // 1, root node에서 첫번째 leaf node(children이 하나 이상 없는 경우)까지의 거리
console.log(bst.findMaxHeight()); // 3, root node에서 마지막 leaf node까지의 거리
console.log(bst.isBalanced()); // false, root node를 기준으로 양 child node가 같은 트리를 가지는 지 여부 확인
bst.add(10);
console.log(bst.findMinHeight()); // 2, 17 하위에 10이 생겼기 때문에 첫번째 leaf node는 3 또는 10이 되어 최소 높이는 2가 됨
console.log(bst.findMaxHeight()); // 3, 변화 없음
console.log(bst.isBalanced()); // true, root인 9을 기준으로 양쪽의 트리가 같은 구조를 가지게 됨
console.log("inOrder: " + bst.inOrder()); // 3,4,5,6,7,9,10,17,20,22 트리의 왼쪽에서 오른쪽으로 순서대로 나열
console.log("preOrder: " + bst.preOrder()); // 9,4,3,6,5,7,17,10,22,20 root를 기준으로 트리를 순차로 내려가면서 root > left (root) > left > right 순으로 내려감
console.log("postOrder: " + bst.postOrder()); // 3,5,7,6,4,10,20,22,17,9  leaf node 부터 역으로 올라옴
console.log("levelOrder: " + bst.levelOrder()); // 9,4,17,3,6,10,22,5,7,20 root node를 level 0, 그 다음 줄이 level 1 으로 해서, left/right 구분없이 같은 level 순으로 나열
