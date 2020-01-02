import builtTree from '../index';

const getInOrder = (root) => {
  const res = [];
  const inOrder = (root) => {
    if (root === null)
      return;
    inOrder(root.left);
    res.push(root.val);
    inOrder(root.right);
  }
  inOrder(root);
  return res;
}

describe('builtTree', () => {
  it('works correctly', () => {
    const pre = [3, 9, 20, 15, 7];
    const inorder = [9, 3, 15, 20, 7];
    const tree = builtTree(pre, inorder);
    expect(getInOrder(tree)).toEqual(inorder);
  });
});
