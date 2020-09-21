/**
 * stacks!
 */

// functions: push, pop, peek, length

const letters = []; // this is our stack

const word = "racecar";

let rword = "";

// put letters of word into stack
for (const a of word) {
  letters.push(a);
}
console.log(letters); // ['r', 'a', 'c', 'e', 'c', 'a', 'r']

// pop off the stack in reverse order
for (const a of word) {
  if (word.indexOf(a) < word.length) {
    rword += letters.pop();
  }
}
console.log(rword); // racecar

if (rword === word) {
  console.log(word + " is a palindrome."); // palindrome은 회문(거꾸로 나열해도 같은 단어가 나오는 것)을 말한다
} else {
  console.log(word + " is not a palindrome.");
}

// Creates a stack
class Stack {
  constructor() {
    (this.count = 0), (this.storage = {});
  }

  // Adds a value onto the end of the stack
  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  // Removes and returns the value at the end of the stack
  pop() {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  size() {
    return this.count;
  }

  // Returns the value at the end of the stack
  peek() {
    return this.storage[this.count - 1];
  }
}
