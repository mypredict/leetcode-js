function createBinaryTreeFromArray(arr) {
  const binaryTreeArray = [];
  arr.forEach((value, index) => {
    const currentNode = value === null ?
      null : {
        value,
        left: null,
        right: null
      };
    binaryTreeArray.push(currentNode);
    if (index === 0) return;

    // 父节点的位置及计算属于父节点的左右节点
    const parentNodeIndex = Math.round(index / 2 - 1);
    const parentNodePosition = index % 2 === 0 ? 'right' : 'left';
    binaryTreeArray[parentNodeIndex][parentNodePosition] = currentNode;
  });
  return binaryTreeArray;
}

function invertTree(root) {
  if (root === null) return root;

  [root.left, root.right] = [root.right, root.left];

  invertTree(root.left);
  invertTree(root.right);

  return root;
}

const binaryTree = createBinaryTreeFromArray([-10, 9, 20, null, null, 15, 7])[0];
console.log(binaryTree);

const invertedTree = invertTree(binaryTree);
console.log(invertedTree);