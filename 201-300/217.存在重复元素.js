// https://leetcode-cn.com/problems/contains-duplicate/

function containsDuplicate(nums) {
  const numsMap = {};
  return nums.some((num) => {
    if (numsMap[num]) {
      return true;
    } else {
      numsMap[num] = true;
      return false;
    }
  });
}

console.log(containsDuplicate([1,4,2]));