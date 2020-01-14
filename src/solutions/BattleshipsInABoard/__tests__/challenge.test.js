import countBattleships from '../index';

describe('battleshipsInABoard', () => {
  it('works correctly', () => {
    expect(countBattleships(
      [
        ['X', '.', '.', 'X'],
        ['.', '.', '.', 'X'],
        ['.', '.', '.', 'X'],
      ]
    )).toBe(2);
  });
});
