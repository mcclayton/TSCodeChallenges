import shuffle from '../index';

describe('shuffle', () => {
  it('shuffles the array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(shuffle(arr).sort()).toEqual(arr.sort());
  });
});
