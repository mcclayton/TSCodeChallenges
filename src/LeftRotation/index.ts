/**
 * Given an array of `n` integers and a number, `d`, perform `d` left rotations on the array.
 * Then return the new array;
 * Sample: n = 5, d = 4, array = [1, 2, 3, 4, 5];
 * Solution = 5 1 2 3 4
 */

const rotateLeft = (arr: number[], rotation: number) => {
  if (!arr || arr.length === 0)
    return arr;

  const arrLength = arr.length;
  // It is easier to shift the array when dealing with right shift instead of
  // left shift, so convert it here.
  const rightShift = arrLength - (rotation % arrLength);

  const res: number[] = [];
  arr.forEach((num, idx) => {
    res[(idx + rightShift) % arrLength] = num;
  });
  return res;
};

export default rotateLeft;
