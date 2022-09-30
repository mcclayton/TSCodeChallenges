/**
 * CoinPath
 * Given a matrix where every cell has some number of coins.
 * Count number of ways to reach bottom right from top left with exactly
 * k coins. We can move to (i+1, j) and (i, j+1) from a cell (i, j).
 *
 * @param nums
 */
const coinPath = function (nums: number[][]) {
  const memo: MemoizedResults = {};
  const size = nums.length;

  const countPaths = (i: number, j: number, coins: number): number => {
    // Base Case
    if (i > size - 1 || j > size - 1) {
      return 0;
    }

    // If subproblem has already been computed
    if (memo[memoKey(i, j, coins)] !== undefined) {
      return memo[memoKey(i, j, coins)];
    }

    const remainingCoins = coins - nums[i][j];
    // If we've reached the end of the matrix and have used exactly all of coins
    if (i === size - 1 && j === size - 1 && remainingCoins === 0) {
      // Return 1 to add one to the list of paths
      return 1;
    }

    // Result is the summation of all the recursive valid paths of i+1 and j+1
    // direction decisions
    const result =
      countPaths(i + 1, j, remainingCoins) +
      countPaths(i, j + 1, remainingCoins);
    // Memoize the result
    memo[memoKey(i, j, coins)] = result;
    return result;
  };

  return countPaths(0, 0, 12);
};

const memoKey = (...args: any[]) => {
  return args.join('-');
};

interface MemoizedResults {
  [key: string]: number;
}

export default coinPath;
