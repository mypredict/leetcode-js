// 根据数组生成链表

function createListNodeFromArray(arr) {
  let currentNode = { value: arr[arr.length - 1], next: null };
  for (let i = arr.length - 2; i >= 0; i--) {
    currentNode = { value: arr[i], next: currentNode };
  }
  return currentNode;
} 

console.log(JSON.stringify(createListNodeFromArray([1, 4, 5, 7, 3, 2, 9])));
