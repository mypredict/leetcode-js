function createBinaryTreeFromArray(arr) {
  const binaryTreeArray = [];
  arr.forEach((value, index) => {
    const currentNode = value === null ?
      null : {
        value,
        left: null,
        right: null,
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

function flattenTree(root) {
  if (root === null) return root;

  flattenTree(root.left);
  flattenTree(root.right);

  const left = root.left;
  const right = root.right;

  root.left = null;
  root.right = left;

  let finalNode = root;
  while (finalNode.right !== null) {
    finalNode = finalNode.right;
  }
  finalNode.right = right;

  return root;
}

const binaryTree = createBinaryTreeFromArray([1,2,5,3,4,null,6])[0];
console.log(binaryTree);

const flatedTree = flattenTree(binaryTree);
console.log(flatedTree);