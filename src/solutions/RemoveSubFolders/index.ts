/**
 * Given a list of folders, remove all sub-folders in those folders and
 * return in any order the folders after removing.
 * If a folder[i] is located within another folder[j], it is called a
 * sub-folder of it.
 * The format of a path is one or more concatenated strings of the form:
 *  `/` followed by one or more lowercase English letters.
 * For example, `/path` and `/path/pathtwo` are valid paths while
 * an empty string and `/` are not.
 */
/**
 * RemoveSubFolders
 * @param {string[]} folder
 * @return {string[]}
 */
const removeSubFolders = function(folder: string[]) {
  const results: string[] = [];
  const trie = new Trie();

  for (let i = 0; i < folder.length; i++) {
    // Slice to ignore the first character '/'
    trie.insert(folder[i].slice(1));
  }
  const root = trie.root;

  const traverse = (node: TrieNode, path = "") => {
    if (node.end) {
      // Join the new sub-path onto the path traversed so far
      return path + '/' + node.value;
    }
    let pathSoFar = path;
    if (node.value) {
      // Join the new sub-path onto the path traversed so far
      pathSoFar += '/' + node.value;
    }
    const childNodes = Object.values(node.nodeMap);
    for (let i = 0; i < childNodes.length; i++) {
      const result = traverse(childNodes[i], pathSoFar);
      if (result) {
        results.push(result);
      }
    }
  };

  // Traverse the Trie only until we reach the first end of a path
  // (i.e. all nested paths will not get included)
  traverse(root);
  return results;
};

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(path: string) {
    let node = this.root;
    // For every subpath in the string
    const subPaths = path.split('/');
    for (let i = 0; i < subPaths.length; i++) {
      const currSubPath = subPaths[i];
      if (!node.nodeMap[currSubPath]) {
        // The subPath is not present in the trie
        // create and add a new node
        node.nodeMap[currSubPath] = new TrieNode(currSubPath);
      }
      // Traverse down to the next node
      node = node.nodeMap[currSubPath];
    }
    node.end = true;
  }
};

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


export default removeSubFolders;
