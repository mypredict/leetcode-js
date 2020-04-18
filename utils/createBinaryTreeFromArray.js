/*
  1: 1 => 0
  2: 2 => 1 2
  3: 4 => 3 4 5 6
  4: 8 => 7 8 9 10 11 12 13 14
  ...
*/

function createBinaryTreeFromArray(arr) {
  const binaryTreeArray = [];
  arr.forEach((value, index) => {
    const currentNode = value === null
      ? null
      : {
        value,
        index,
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

console.log(createBinaryTreeFromArray([-10, 9, 20, null, null, 15, 7])[0]);
