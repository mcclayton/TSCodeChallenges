import maximumNumberOfBalloons from '../index';

describe('maximumNumberOfBalloons', () => {
  it('works correctly', () => {
    expect(maximumNumberOfBalloons('loonbalxballpoon')).toBe(2);
    expect(maximumNumberOfBalloons('alloon')).toBe(0);
    expect(maximumNumberOfBalloons('nlaebolko')).toBe(1);
  });
});
