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
    if (binaryTreeArray[parentNodeIndex]) {
      binaryTreeArray[parentNodeIndex][parentNodePosition] = currentNode;
    }
  });
  return binaryTreeArray;
}

function findRepeatSubTree(root) {
  const repeatSubTrees = [];
  const repeatSubTreesMemo = {};

  const traverse = (node) => {
    if (node === null) return node;
    traverse(node.left);
    traverse(node.right);
    const subTree = `${node.value}+${node?.left?.value || null}+${node?.right?.value || null}`;
    if (!repeatSubTreesMemo[subTree]) {
      repeatSubTreesMemo[subTree] = {
        root: node,
        value: 0,
      };
    }
    repeatSubTreesMemo[subTree].value += 1;
  };
  traverse(root);

  Object.values(repeatSubTreesMemo).forEach(({ root, value }) => {
    if (value > 1) {
      repeatSubTrees.push(root);
    }
  });

  return repeatSubTrees;
}

const binaryTree = createBinaryTreeFromArray([1,2,3,4,null,2,4,null,null,null,null,4])[0];
console.log(binaryTree);

const invertedTree = findRepeatSubTree(binaryTree);
console.log(invertedTree);