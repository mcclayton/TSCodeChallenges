/**
 * Given an 2D board, count how many battleships are in it.
 * The battleships are represented with 'X's,
 * empty slots are represented with '.'s.
 * You may assume the following rules:
 * You receive a valid board, made of only battleships or empty slots.
 * Battleships can only be placed horizontally or vertically.
 * In other words, they can only be made of the shape 1xN (1 row, N columns)
 * or Nx1 (N rows, 1 column), where N can be of any size.
 * At least one horizontal or vertical cell separates between
 * two battleships - there are no adjacent battleships.
 *
 * Example:
 * X..X
 * ...X
 * ...X
 * Result: 2
 */
/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board: string[][]) {
  let count = 0;

  // Simply, only count an `X` as a new ship if there is no
  // X to the left, right, or above
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (
        board[i][j] == 'X' &&
        (i == 0 || board[i - 1][j] == '.') &&
        (j == 0 || board[i][j - 1] == '.')
      ) {
        count++;
      }
    }
  }
  return count;
};

export default countBattleships;
