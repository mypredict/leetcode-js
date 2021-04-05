function createBinaryTreeFromArray(arr) {
  const binaryTreeArray = [];
  arr.forEach((value, index) => {
    const currentNode = value === null ?
      null : {
        value,
        left: null,
        right: null,
        next: null,
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

  const connectNode = (leftNode, rightNode) => {
    if (leftNode === null || rightNode === null) return;

    leftNode.next = rightNode;
    connectNode(leftNode.left, leftNode.right);
    connectNode(rightNode.left, rightNode.right);
    connectNode(leftNode.right, rightNode.left);
  };
  connectNode(root.left, root.right);

  return root;
}

const binaryTree = createBinaryTreeFromArray([1,2,3,4,5,6,7])[0];
console.log(binaryTree);

const invertedTree = invertTree(binaryTree);
console.log(invertedTree);