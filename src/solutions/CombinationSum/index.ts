/**
 * CombinationSum
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function (candidates: number[], target: number) {
  const resultList: number[][] = [];
  // Need to sort if array is not sorted
  backtrack(resultList, [], candidates.sort(), target, 0);
  return resultList;
};

const backtrack = function (
  resultList: number[][],
  pathSoFar: number[],
  candidates: number[],
  remaining: number,
  start: number,
) {
  if (remaining < 0) {
    // Exceeded target, backtrack
    return;
  } else if (remaining === 0) {
    // Found solution, add to result and backtrack
    resultList.push([...pathSoFar]);
  } else {
    for (let i = start; i < candidates.length; i++) {
      const currEl = candidates[i];
      pathSoFar.push(currEl);
      backtrack(resultList, pathSoFar, candidates, remaining - currEl, i); // not i + 1 because we can reuse same elements
      pathSoFar.pop();
    }
  }
};

export default combinationSum;
