var rotate = function(nums, k) {
  let len=nums.length
  let arr1 = nums.splice(k,len - k);
  let arr2 = nums.splice(0, k);
  let result =arr1.concat(arr2)
  nums = result
  return nums
};

let len=nums.length
let arr1 = nums.splice(k,len - k);
let arr2 = nums.splice(0, k);

let arr2 = nums.splice(0, k);
let arr1 = nums.splice(0);