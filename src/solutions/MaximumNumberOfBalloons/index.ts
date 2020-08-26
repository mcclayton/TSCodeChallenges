/**
 * MaximumNumberOfBalloons
 */
const maximumNumberOfBalloons = function (text: string) {
  const map: Record<string, number> = { b: 0, a: 0, l: 0, o: 0, n: 0 };
  text.split('').forEach(l => map[l]++);
  return ['b', 'a', 'l', 'o', 'n'].reduce((acc, curr, idx) => {
    // Divide 'l' and 'o' by two since we need two of each to make 'balloon'
    const currNum = (idx === 2 || idx === 3) ? map[curr] / 2 : map[curr];
    // Find the minimum amount of satisfying characters
    return Math.floor(Math.min(currNum, acc));
  }, Number.POSITIVE_INFINITY);
};

export default maximumNumberOfBalloons;
