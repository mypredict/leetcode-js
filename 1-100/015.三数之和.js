// https://leetcode-cn.com/problems/3sum/

function threeSum(nums) {
  const threeTupleMap = [];
  const numsLen = nums.length;
  const indexHashMap = {};
  const exist = {};
  nums.forEach((num, index) => {
    indexHashMap[num] = index;
  });
  for (let i=0; i<numsLen; i++) {
    for (let j=i+1; j<numsLen; j++) {
      const threeNumIndex = indexHashMap[0 - nums[i] - nums[j]];
      if (threeNumIndex > j) {
        const currentTuple = [nums[i], nums[j], nums[threeNumIndex]].sort();
        if (!exist[String(currentTuple[0]) + currentTuple[1]]) {
          threeTupleMap.push(currentTuple);
          exist[String(currentTuple[0]) + currentTuple[1]] = true;
        }
      }
    }
  }
  return threeTupleMap;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
