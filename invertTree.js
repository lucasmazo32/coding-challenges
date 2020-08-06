// https://leetcode.com/problems/invert-binary-tree/submissions/

const invertTree = function(node) {
  if (node === null) {
      return null;
  }
  if (node.left === null && node.right === null) {
      return node;
  } else {
      let lefty = null;
      let righty = null;
      if (node.left) {
          lefty = invertTree(node.left);
      }
      if (node.right) {
          righty = invertTree(node.right);
      }
      node.left = righty;
      node.right = lefty;
  }
  return node;
};