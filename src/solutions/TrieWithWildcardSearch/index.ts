/**
 * TrieWithWildcard
 * Implement a trie with that can add and search words.
 *
 * However, search(word) can search a literal word or a regular expression
 * string containing only letters `a-z` or `.`. A . means it can represent any
 * one letter.
 */

export default class TrieWithWildcard {
  root: Node;
  constructor() {
    this.root = new Node();
  }

  insert(word: string) {
    let node = this.root;
    // For every letter in the string
    for (let i = 0; i < word.length; i++) {
      const currLetter = word[i];
      if (!node.nodeMap[currLetter]) {
        // The letter is not present in the trie
        // create and add a new node
        node.nodeMap[currLetter] = new Node(currLetter);
      }
      // Traverse down to the next node
      node = node.nodeMap[currLetter];
    }
    node.end = true;
  }

  search(word: string) {
    // Call out to helper function that handles wildcards with recursion
    return searchWithWildcards(this.root, word);
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

const searchWithWildcards = (root: Node, word: string) => {
  let node = root;
  // For every letter in the string
  for (let i = 0; i < word.length; i++) {
    const currLetter = word[i];

    if (currLetter === '.') {
      // If the current letter is a wildcard, recurse over all subtrees
      const subTreeNodes = Object.values(node.nodeMap);
      for (let j = 0; j < subTreeNodes.length; j++) {
        if (searchWithWildcards(subTreeNodes[j], word.slice(i + 1))) {
          // If a subtree evaluates to true, return
          return true;
        }
      }
      // No subtree returned true (or no subtrees), so return false
      return false;
    } else {
      if (node.nodeMap[currLetter]) {
        // The current letter is in the trie, so traverse
        // down to the next node
        node = node.nodeMap[currLetter];
      } else {
        // The current letter is not in the trie, return false
        return false;
      }
    }
  }
  // Base Case
  // Return whether or not the current node is the end of a word
  return node.end;
};

interface INodeMap {
  [key: string]: Node;
}

class Node {
  nodeMap: INodeMap;
  letter: string | null;
  end: boolean;

  constructor(letter?: string) {
    this.letter = letter || null;
    this.nodeMap = {};
    this.end = false;
  }
}
