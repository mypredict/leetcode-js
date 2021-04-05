// https://leetcode-cn.com/problems/swap-nodes-in-pairs/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);
a.next = b;
b.next = c;
c.next = d;

var swapPairs = function (head) {
  let listNode = new ListNode(0);
  listNode.next = head;
  let result = listNode;
  while (listNode && listNode.next) {
    let a = listNode.next
    let b = listNode.next.next
    listNode.next = b
    a.next = b.next
    b.next = a
    listNode = a
  }
  return result.next

  // const iterate = (listNode) => {
  //   let a = listNode.next
  //   let b = listNode.next.next
  //   listNode.next = b
  //   a.next = b.next
  //   b.next = a
  //   listNode = a
  // };
  // iterate(listNode);

};

console.log(swapPairs(a));