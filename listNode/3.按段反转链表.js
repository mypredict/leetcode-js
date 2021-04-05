function createListNodeFromArray(arr) {
  let currentNode = { value: arr[arr.length - 1], next: null };
  for (let i = arr.length - 2; i >= 0; i--) {
    currentNode = { value: arr[i], next: currentNode };
  }

  return currentNode;
}

let endNext = null;
function reverseListNodeRange(headNode) {

}

function reverseListNodeSection(headNode, section) {
  let currentNode = headNode;
  let currentIndex = 0;
  while () {
    currentNode.next = reverseListNodeRange(headNode, );
  }
}

const oldListNode = createListNodeFromArray([1, 2, 3, 4, 5]);
console.log(JSON.stringify(oldListNode));

const newListNode = reverseListNodeRange(oldListNode, 2);
console.log(JSON.stringify(newListNode));