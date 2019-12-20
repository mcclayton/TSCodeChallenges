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
| [ArrayShuffle](https://github.com/mcclayton/TSCodeChallenges/tree/master/./src/ArrayShuffle/index.ts) | Shuffle a set of numbers without duplicates. | [Leetcode](https://leetcode.com/articles/shuffle-an-array/) |
| [ImplementTrie](https://github.com/mcclayton/TSCodeChallenges/tree/master/./src/ImplementTrie/index.ts) | Implement a trie with `insert`, `search`, and `startsWith` methods. | [LeetCode](https://leetcode.com/articles/implement-trie-prefix-tree/) |
| [IsSubtree](https://github.com/mcclayton/TSCodeChallenges/tree/master/./src/IsSubtree/index.ts) | Given two non-empty binary trees `s` and `t`, check whether tree `t` has exactly the same structure and node values with a subtree of `s`. | [Leetcode](https://leetcode.com/articles/subtree-of-another-tree/)
[GeeksforGeeks](https://www.geeksforgeeks.org/check-if-a-binary-tree-is-subtree-of-another-binary-tree/) |
| [LargestNumber](https://github.com/mcclayton/TSCodeChallenges/tree/master/./src/LargestNumber/index.ts) | Given a list of non negative integers, arrange them such that they form the largest number. | [Leetcode](https://leetcode.com/articles/largest-number/) [GeeksforGeeks](https://www.geeksforgeeks.org/given-an-array-of-numbers-arrange-the-numbers-to-form-the-biggest-number/) |
| [LeftRotation](https://github.com/mcclayton/TSCodeChallenges/tree/master/./src/LeftRotation/index.ts) | Given an array of `n` integers and a number, `d`, perform `d` left rotations on the array. |  |
| [PathSum](https://github.com/mcclayton/TSCodeChallenges/tree/master/./src/PathSum/index.ts) | Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum. | [GeeksforGeeks](https://www.geeksforgeeks.org/root-to-leaf-path-sum-equal-to-a-given-number) |
| [TrieWithWildcardSearch](https://github.com/mcclayton/TSCodeChallenges/tree/master/./src/TrieWithWildcardSearch/index.ts) | Implement a trie that can add and search words and support the `.` wildcard. | [Original Problem](https://leetcode.com/problems/add-and-search-word-data-structure-design/) |
| [ValidParentheses](https://github.com/mcclayton/TSCodeChallenges/tree/master/./src/ValidParentheses/index.ts) | Given a string containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid. | [Leetcode](https://leetcode.com/articles/valid-parentheses/) |
