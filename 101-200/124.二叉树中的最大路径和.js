// https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/
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

function maxPathSum(root) {
  let maxSum = -Infinity;
  const oneSizeGain = (node) => {
    if (node === null) return 0;
    const leftGain = Math.max(0, oneSizeGain(node.left));
    const rightGain = Math.max(0, oneSizeGain(node.right));
    maxSum = Math.max(maxSum, leftGain + rightGain + node.value);
    return node.value + Math.max(leftGain, rightGain);
  }
  oneSizeGain(root);
  return maxSum;
}

/*
  [-10, 9, 20, null, null, 15, 7]
  const root = {
    value: -10,
    left: {
      value: 9,
      left: null,
      right: null
    },
    right: {
      value: 20,
      left: {
        value: 15,
        left: null,
        right: null
      },
      right: {
        value: 7,
        left: null,
        right: null
      }
    }
  };
*/
const root = createBinaryTreeFromArray([-10, 9, 20, null, null, 15, -7])[0];
console.log(maxPathSum(root));