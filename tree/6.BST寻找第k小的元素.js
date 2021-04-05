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

let index = 0;
let value;
function findKIndexTree(root, k) {
  if (root === null) return;

  findKIndexTree(root.left, k);
  index++;
  if (index === k) {
    value = root;
  }
  findKIndexTree(root.right, k);
}

const binaryTree = createBinaryTreeFromArray([5,3,6,2,4,null,null,1])[0];
console.log(binaryTree);

const kIndexTree = findKIndexTree(binaryTree, 3);
console.log(value);