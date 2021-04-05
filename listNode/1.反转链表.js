function createListNodeFromArray(arr) {
  let currentNode = { value: arr[arr.length - 1], next: null };
  for (let i = arr.length - 2; i >= 0; i--) {
    currentNode = { value: arr[i], next: currentNode };
  }

  return currentNode;
}

function reverseListNode(headNode) {
  if (headNode.next === null) {
    return headNode;
  }

  const newNode = reverseListNode(headNode.next);
  headNode.next.next = headNode;
  headNode.next = null;

  return newNode;
}

const oldListNode = createListNodeFromArray([1, 2, 3, 4, 5]);
console.log(JSON.stringify(oldListNode));

const newListNode = reverseListNode(oldListNode);
console.log(JSON.stringify(newListNode));