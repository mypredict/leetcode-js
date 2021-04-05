function createListNodeFromArray(arr) {
  let currentNode = { value: arr[arr.length - 1], next: null };
  for (let i = arr.length - 2; i >= 0; i--) {
    currentNode = { value: arr[i], next: currentNode };
  }

  return currentNode;
}

let endNext = null;
function reverseListNodeRange(headNode, start, end, currentIndex = 0) {
  if (currentIndex < start) {
    headNode.next = reverseListNodeRange(headNode.next, start, end, currentIndex + 1);
    return headNode;
  }

  if (currentIndex > end) {
    return headNode;
  }

  if (currentIndex >= start && currentIndex < end) {
    const newNode = reverseListNodeRange(headNode.next, start, end, currentIndex + 1);
    headNode.next.next = headNode;
    headNode.next = endNext;
    return newNode;
  }

  if (currentIndex === end) {
    endNext = headNode.next;
    return headNode;
  }
}

const oldListNode = createListNodeFromArray([1, 2, 3, 4, 5]);
console.log(JSON.stringify(oldListNode));

const newListNode = reverseListNodeRange(oldListNode, 1, 3);
console.log(JSON.stringify(newListNode));