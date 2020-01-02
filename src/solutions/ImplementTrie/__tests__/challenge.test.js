import Trie from '../index';

describe('Trie', () => {
  let trie;
  beforeAll(() => {
    trie = new Trie();
    trie.insert('foo');
    trie.insert('foobar');
    trie.insert('foolish');
    trie.insert('mad');
    trie.insert('bad');
    trie.insert('rad');
  });

  it('search correctly searches for whole word', () => {
    expect(trie.search('foobar')).toBe(true);
    expect(trie.search('foolish')).toBe(true);
    expect(trie.search('fool')).toBe(false);
    expect(trie.search('fool')).toBe(false);
    expect(trie.search('test')).toBe(false);
  });

  it('startsWith correctly searches for prefix', () => {
    expect(trie.startsWith('foobar')).toBe(true);
    expect(trie.startsWith('foolish')).toBe(true);
    expect(trie.startsWith('fool')).toBe(true);
    expect(trie.startsWith('test')).toBe(false);
  });
});
