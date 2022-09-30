export default class Trie {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string) {
    let node = this.root;
    // For every letter in the string
    for (let i = 0; i < word.length; i++) {
      const currLetter = word[i];
      if (!node.nodeMap[currLetter]) {
        // The letter is not present in the trie
        // create and add a new node
        node.nodeMap[currLetter] = new TrieNode(currLetter);
      }
      // Traverse down to the next node
      node = node.nodeMap[currLetter];
    }
    node.end = true;
  }

  search(word: string) {
    let node = this.root;
    // For every letter in the string
    for (let i = 0; i < word.length; i++) {
      const currLetter = word[i];
      if (node.nodeMap[currLetter]) {
        // The current letter is in the trie, so traverse
        // down to the next node
        node = node.nodeMap[currLetter];
      } else {
        // The current letter is not in the trie, return false
        return false;
      }
    }
    // Return whether or not the current node is the end of a word
    return node.end;
  }

  startsWith(prefix: string) {
    let node = this.root;
    // For every letter in the string
    for (let i = 0; i < prefix.length; i++) {
      const currLetter = prefix[i];
      if (node.nodeMap[currLetter]) {
        // The current letter is in the trie, so traverse
        // down to the next node
        node = node.nodeMap[currLetter];
      } else {
        // The current letter is not in the trie, return false
        return false;
      }
    }
    // The full prefix was in the tree
    return true;
  }
}

interface INodeMap {
  [key: string]: TrieNode;
}

class TrieNode {
  nodeMap: INodeMap;
  value: string | null;
  end: boolean;

  constructor(value?: string) {
    this.value = value || null;
    this.nodeMap = {};
    this.end = false;
  }
}
