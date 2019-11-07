// https://leetcode-cn.com/problems/remove-element/

function removeElement(nums, val) {
  for (let i=nums.length-1; i>=0; i--) {
    nums[i] === val && nums.splice(i, 1);
  }
  return nums.length;
}

console.log(removeElement([0,1,2,2,3,0,4,2], 2));