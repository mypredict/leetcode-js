const findMax = (arr) => {
  let max = arr[0];
  let maxIndex = 0;
  arr.forEach((num, index) => {
    if (num > max) {
      max = num;
      maxIndex = index;
    }
  });
  return [max, maxIndex];
};

function createMaxBinaryTreeFromArray(arr) {
  if (arr.length === 0) return null;

  const [max, maxIndex] = findMax(arr);

  const root = {};
  root.value = max;
  root.left = createMaxBinaryTreeFromArray(arr.slice(0, maxIndex));
  root.right = createMaxBinaryTreeFromArray(arr.slice(maxIndex + 1));

  return root;
}

console.log(createMaxBinaryTreeFromArray([3,2,1,6,0,5]));
