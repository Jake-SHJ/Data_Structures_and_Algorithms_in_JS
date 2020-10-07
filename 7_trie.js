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
    // node를 전달하지 않으면 root를 기본 node로 사용
    if (input.length == 0) {
      node.setEnd();
      return;
    } else if (!node.keys.has(input[0])) {
      // 들어온 문자열의 첫번째 단어가 root의 직속 하위 node (key)에 없다면
      node.keys.set(input[0], new Node());
      // 새로운 키로 지정
      return this.add(input.substring(1), node.keys.get(input[0])); // 재귀 함수
      // 첫번째 단어를 제거하고 다시 add 반복
    } else {
      return this.add(input.substring(1), node.keys.get(input[0])); // 재귀 함수
    }
  };

  // 모든 단어를 확인할 필요가 없기 때문에 다른 데이터 구조보다 Trie에서 훨씬 빠름
  isWord = (word) => {
    let node = this.root;
    while (word.length > 1) {
      if (!node.keys.has(word[0])) {
        return false;
      } else {
        node = node.keys.get(word[0]); // node.key중에 word[0]이 있는 경우이기 때문에 찾는 범위를 이 key로 한정
        word = word.substring(1); // 첫번째 단어를 제거
      }
    }
    return node.keys.has(word) && node.keys.get(word).isEnd() ? true : false; // 키가 word를 가지고 있고, 그 word가 마지막일 때 true(즉, 마지막 단어가 존재하면 true)
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
console.log(myTrie.isWord("doll")); // true
console.log(myTrie.isWord("dor")); // false 없는 단어
console.log(myTrie.isWord("dorf")); // false 없는 단어
console.log(myTrie.print()); // ['ball', 'bat', 'doll', 'dork', 'dorm', 'do', 'send', 'sense'];
