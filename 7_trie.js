/**
 * Trie Data Structure
 */

// Trie에서 데이터를 저장하는 연관 데이터 구조의 각 단계는 Trie의 node임
// 문자열을 만들기 위해 합칠 수 있는 글자 수가 한정되어 있기 때문에 주로 단어를 저장하는데 사용됨 ex) 단어가 사전에 있는지 확인하는 것
// 각 단계 또는 node는 단어의 한 글자를 나타냄

class Node {
  constructor() {
    this.keys = new Map();
    this.end = false; // 단어의 끝인지 여부
    this.setEnd = () => {
      this.end = true; // 단어의 끝을 지정
    };
    this.isEnd = () => {
      return this.end; // 단어의 끝 확인
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
      return this.add(input.substring(1), node.keys.get(input[0]));
    } else {
      return this.add(input.substring(1), node.keys.get(input[0]));
    }
  };

  isWord = (word) => {
    let node = this.root;
    while (word.length > 1) {
      if (!node.keys.has(word[0])) {
        return false;
      } else {
        node = node.keys.get(word[0]);
        word = word.substring(1);
      }
    }
    return node.keys.has(word) && node.keys.get(word).isEnd() ? true : false;
  };

  print = () => {
    let words = new Array();
    let search = (node, string) => {
      if (node.keys.size != 0) {
        for (let letter of node.keys.keys()) {
          search(node.keys.get(letter), string.concat(letter));
        }
        if (node.isEnd()) {
          words.push(string);
        }
      } else {
        string.length > 0 ? words.push(string) : undefined;
        return;
      }
    };
    search(this.root, new String());
    return words.length > 0 ? words : mo;
  };
}

myTrie = new Trie();
myTrie.add("ball");
myTrie.add("bat");
myTrie.add("doll");
myTrie.add("dork");
myTrie.add("do");
myTrie.add("dorm");
myTrie.add("send");
myTrie.add("sense");
console.log(myTrie.isWord("doll"));
console.log(myTrie.isWord("dor"));
console.log(myTrie.isWord("dorf"));
console.log(myTrie.print());
