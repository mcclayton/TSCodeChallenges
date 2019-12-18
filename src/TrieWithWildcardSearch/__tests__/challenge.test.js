import TrieWithWildcard from '../index';

describe('TrieWithWildcard', () => {
  let trie;
  beforeAll(() => {
    trie = new TrieWithWildcard();
    trie.insert('bad');
    trie.insert('dad');
    trie.insert('mad');
  });

  it('search correctly without wildcards', () => {
    expect(trie.search('bad')).toBe(true);
    expect(trie.search('pad')).toBe(false);
  });

  it('search correctly with wildcards', () => {
    expect(trie.search('.ad')).toBe(true);
    expect(trie.search('b..')).toBe(true);
    expect(trie.search('...')).toBe(true);
    expect(trie.search('...d')).toBe(false);
  });
});
