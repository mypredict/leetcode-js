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

function insertBST(root, num) {
  let target = null;

  const traverse = (node) => {
    if (node === null) return;
    if (node.value === num) {
      target = node;
      return;
    }
    traverse(node.value > num ? node.left : node.right);
  };
  traverse(root);

  return target;
}

const binaryTree = createBinaryTreeFromArray([10,5,15,null,null,12,20])[0];
console.log(binaryTree);

const insertedBST = findBST(binaryTree, 13);
console.log(insertedBST);
