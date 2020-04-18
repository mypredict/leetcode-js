// https://leetcode-cn.com/problems/find-the-duplicate-number/

var findDuplicate = function(nums) {
  let index1 = 0;
  let index2 = 0;
  let count = 0;
  while (true) {
    count++;
    if (count == 10) return 1;



    index1 = nums[index1];
    if (nums[index1] === nums[index2] && index1 !== index2) {
      return nums[index1];
    }
    if (index1 > index2) {
      index2 = index1;
    }
    console.log(index2)
  }
};

console.log(findDuplicate([3,1,3,4,2]));