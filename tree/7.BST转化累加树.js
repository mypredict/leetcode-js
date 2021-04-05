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

function conversionTree(root) {
  let sum = 0;
  const traverse = (node) => {
    if (node === null) return;
    traverse(node.right);
    sum += node.value;
    node.value = sum;
    traverse(node.left);
  };
  traverse(root);

  return root;
}

const binaryTree = createBinaryTreeFromArray([4,1,6,0,2,5,7,null,null,null,3,null,null,null,8])[0];
console.log(binaryTree);

const conversionedTree = conversionTree(binaryTree);
console.log(conversionedTree);