/**
 * Trie Data Structure
 */

class Node {
  constructor() {
    this.keys = new Map();
    this.end = false;
    this.setEnd = () => {
      this.end = true;
    };
    this.isEnd = () => {
      return this.end;
    };
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  add = (input, node = this.root) => {
    if (input.length == 0) {
      node.setEnd();
      return;
    } else if (!node.keys.has(input[0])) {
      node.keys.set(input[0], new Node());
      return this.add(input.substr(1), node.keys.get(input[0]));
    } else {
      return this.add(input.substr(1), node.keys.get(input[0]));
    }
  };
}
