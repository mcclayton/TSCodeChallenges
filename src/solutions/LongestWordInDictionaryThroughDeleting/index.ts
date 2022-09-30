/**
 * Given a string and a string dictionary, find the longest string in the
 * dictionary that can be formed by deleting some characters of the given
 * string.
 * If there are more than one possible results, return the longest word with
 * the smallest lexicographical order.
 * If there is no possible result, return the empty string.
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
// N = number of words in d
// M = length of longest word in d
// K = length of s
// Time Complexity: O(N * M * K)
// Since for every word N, we search through every letter M. For every letter M we search in s of length K
var findLongestWord = function (s: string, d: string[]) {
  let result = '';
  for (let i = 0; i < d.length; i++) {
    const word = d[i];

    if (isSubsequence(word, s)) {
      if (result.length < word.length) {
        // All characters were found, see if we should update result
        // If the new word match is larger than the previous known result, update it
        result = word;
      } else if (result.length === word.length && word < result) {
        // If the new word is the same lenght as the previous result
        // but comes lexographically before it, then update the result
        result = word;
      }
    }
  }
  return result;
};

/**
 * Return true if s1 is a subsequence of s2
 * N = length of s1
 * M = length of s2
 * Time Complexity: O(M * N)
 */
const isSubsequence = (s1: string, s2: string) => {
  let j = 0; // For index of s1 (or subsequence)
  // Traverse s2 and s1, and compare current
  // character of s2 with first unmatched char
  // of s1, if matched then move ahead in s1
  for (let i = 0; i < s2.length && j < s1.length; i++) {
    if (s1[j] == s2[i]) {
      j++;
    }
  }

  // If all characters of s1 were found in s2
  return j === s1.length;
};

export default findLongestWord;
