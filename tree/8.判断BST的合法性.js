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
    if (binaryTreeArray[parentNodeIndex] !== null || binaryTreeArray[parentNodeIndex] !== undefined) {
      binaryTreeArray[parentNodeIndex][parentNodePosition] = currentNode;
    }
  });
  return binaryTreeArray;
}

function judgeBST(root) {
  const traverse = (node, min, max) => {
    if (node === null) return true;
    if (min !== null && node.value <= min.value) return false;
    if (max !== null && node.value >= max.value) return false;
    return traverse(node.left, min, node) && traverse(node.right, node, max);
  };
  return traverse(root, null, null);
}

const binaryTree = createBinaryTreeFromArray([10,5,15,null,null,6,20])[0];
console.log(binaryTree);

const judgedBST = judgeBST(binaryTree);
console.log(judgedBST);
