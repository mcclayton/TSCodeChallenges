# TSCodeChallenges
[![CircleCI](https://circleci.com/gh/mcclayton/TSCodeChallenges.svg?style=svg)](https://circleci.com/gh/mcclayton/TSCodeChallenges)

Code challenges / solutions implemented in Typescript.

## Build
When writing new solutions, it is helpful to build in watch mode to catch any
build errors as you go with:

```
yarn build:watch
```


To dyamically generate the solutions table and add it to the README, run:
```
yarn build:readme
```

## Test
Each solution should have its own tests to verify the integrity of the solution.
To run the test suite, run:

```
yarn test
```

## Generate New Challenge
You can bootstrap a new challenge directory structure and template files by running the generation script with:

```
yarn new
```

## Solutions

| Code | Description | Links |
|:----:|:-----------:|:-----:|
| [AddTwoNumbers](https://github.com/mcclayton/TSCodeChallenges/tree/master/./src/solutions/AddTwoNumbers/index.ts) | You are given two *non-empty* linked lists representing two *non-negative* integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list. | [Leetcode](https://leetcode.com/articles/add-two-numbers/) [GeeksforGeeks](https://www.geeksforgeeks.org/add-two-numbers-represented-by-linked-lists/) |
| [ArrayShuffle](https://github.com/mcclayton/TSCodeChallenges/tree/master/./src/solutions/ArrayShuffle/index.ts) | Shuffle a set of numbers without duplicates. | [Leetcode](https://leetcode.com/articles/shuffle-an-array/) |
| [BinaryTreeFromPreorderAndInorder](https://github.com/mcclayton/TSCodeChallenges/tree/master/./src/solutions/BinaryTreeFromPreorderAndInorder/index.ts) | Given preorder and inorder traversal of a tree, construct the binary tree. | [GeeksforGeeks](https://www.geeksforgeeks.org/construct-tree-from-given-inorder-and-preorder-traversal/) |
| [BinaryTreeLevelOrderTraversal](https://github.com/mcclayton/TSCodeChallenges/tree/master/./src/solutions/BinaryTreeLevelOrderTraversal/index.ts) | Given a binary tree, return the level order traversal of its nodes' values as a matrix. (ie, from left to right, level by level). | [GeeksforGeeks](https://www.geeksforgeeks.org/level-order-tree-traversal/) |
| [ImplementTrie](https://github.com/mcclayton/TSCodeChallenges/tree/master/./src/solutions/ImplementTrie/index.ts) | Implement a trie with `insert`, `search`, and `startsWith` methods. | [LeetCode](https://leetcode.com/articles/implement-trie-prefix-tree/) |
| [IsSubtree](https://github.com/mcclayton/TSCodeChallenges/tree/master/./src/solutions/IsSubtree/index.ts) | Given two non-empty binary trees `s` and `t`, check whether tree `t` has exactly the same structure and node values with a subtree of `s`. | [Leetcode](https://leetcode.com/articles/subtree-of-another-tree/) [GeeksforGeeks](https://www.geeksforgeeks.org/check-if-a-binary-tree-is-subtree-of-another-binary-tree/) |
| [KthSmallestBST](https://github.com/mcclayton/TSCodeChallenges/tree/master/./src/solutions/KthSmallestBST/index.ts) | Given a binary search tree, write a function to find the `kth` smallest element in it. | [Leetcode](https://leetcode.com/articles/kth-smallest-element-in-a-bst/) |
| [LargestNumber](https://github.com/mcclayton/TSCodeChallenges/tree/master/./src/solutions/LargestNumber/index.ts) | Given a list of non negative integers, arrange them such that they form the largest number. | [Leetcode](https://leetcode.com/articles/largest-number/) [GeeksforGeeks](https://www.geeksforgeeks.org/given-an-array-of-numbers-arrange-the-numbers-to-form-the-biggest-number/) |
| [LeftRotation](https://github.com/mcclayton/TSCodeChallenges/tree/master/./src/solutions/LeftRotation/index.ts) | Given an array of `n` integers and a number, `d`, perform `d` left rotations on the array. |  |
| [LongestWordInDictionaryThroughDeleting](https://github.com/mcclayton/TSCodeChallenges/tree/master/./src/solutions/LongestWordInDictionaryThroughDeleting/index.ts) | Given a string and a string dictionary, find the longest string in the dictionary that can be formed by deleting some characters of the given string. | [Leetcode](https://leetcode.com/articles/longest-word-in-dictionary-through-deletion/) [GeeksforGeeks](https://www.geeksforgeeks.org/find-largest-word-dictionary-deleting-characters-given-string/) |
| [MaximumDepthOfBinaryTree](https://github.com/mcclayton/TSCodeChallenges/tree/master/./src/solutions/MaximumDepthOfBinaryTree/index.ts) | Given a binary tree, find its maximum depth. | [GeeksforGeeks](https://www.geeksforgeeks.org/write-a-c-program-to-find-the-maximum-depth-or-height-of-a-tree/) |
| [MaximumProductSubarray](https://github.com/mcclayton/TSCodeChallenges/tree/master/./src/solutions/MaximumProductSubarray/index.ts) | Given an integer array `nums`, find the contiguous subarray within an array (containing at least one number) which has the largest product. | [GeeksforGeeks](https://www.geeksforgeeks.org/maximum-product-subarray-set-3/) |
| [PalindromeLinkedList](https://github.com/mcclayton/TSCodeChallenges/tree/master/./src/solutions/PalindromeLinkedList/index.ts) | Given a singly linked list, determine if it is a palindrome in `O(n)` time and `O(1)` space. | [ProgramCreek](https://www.programcreek.com/2014/07/leetcode-palindrome-linked-list-java/) [GeeksforGeeks](https://www.geeksforgeeks.org/function-to-check-if-a-singly-linked-list-is-palindrome/) |
| [PathSum](https://github.com/mcclayton/TSCodeChallenges/tree/master/./src/solutions/PathSum/index.ts) | Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum. | [GeeksforGeeks](https://www.geeksforgeeks.org/root-to-leaf-path-sum-equal-to-a-given-number) |
| [PopulatingNextRightPointersInEachNode](https://github.com/mcclayton/TSCodeChallenges/tree/master/./src/solutions/PopulatingNextRightPointersInEachNode/index.ts) | Populate each next pointer to point to its next right node (on the same level). If there is no next right node, the next pointer should be set to NULL. Do this in `O(1)` space. [Original Problem](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/) | [GeeksforGeeks](https://www.geeksforgeeks.org/level-order-tree-traversal/) |
| [SmallestSubtreeWithAllTheDeepestNodes](https://github.com/mcclayton/TSCodeChallenges/tree/master/./src/solutions/SmallestSubtreeWithAllTheDeepestNodes/index.ts) | Given a binary tree rooted at `root`, return the node with the largest depth such that it contains all the deepest nodes in its subtree. | [Leetcode](https://leetcode.com/articles/smallest-subtree-with-all-the-deepest-nodes/) |
| [TrieWithWildcardSearch](https://github.com/mcclayton/TSCodeChallenges/tree/master/./src/solutions/TrieWithWildcardSearch/index.ts) | Implement a trie that can add and search words and support the `.` wildcard. | [Original Problem](https://leetcode.com/problems/add-and-search-word-data-structure-design/) |
| [TwoSum](https://github.com/mcclayton/TSCodeChallenges/tree/master/./src/solutions/TwoSum/index.ts) | Given an array of integers, return *indices* of the two numbers such that they add up to a specific target. | [Leetcode](https://leetcode.com/articles/two-sum/) |
| [ValidParentheses](https://github.com/mcclayton/TSCodeChallenges/tree/master/./src/solutions/ValidParentheses/index.ts) | Given a string containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid. | [Leetcode](https://leetcode.com/articles/valid-parentheses/) |
