import removeSubFolders from '../index';

describe('removeSubFolders', () => {
  it('works correctly', () => {
    expect(removeSubFolders(
      ["/a", "/a/b", "/c/d", "/c/d/e", "/c/f"]
    )).toEqual(["/a", "/c/d", "/c/f"]);
  });
});
