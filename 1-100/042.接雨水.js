// https://leetcode-cn.com/problems/trapping-rain-water/

function trap(height) {
  let count = 0;
  let leftMax = height[0];
  let rightMax = height[height.length - 1];
  let leftIndex = 1;
  let rightIndex = height.length - 2;
  while (leftIndex <= rightIndex) {
    if (leftMax > rightMax) {
      if (height[rightIndex] > rightMax) {
        rightMax = height[rightIndex];
      } else {
        count += rightMax - height[rightIndex];
      }
      rightIndex--;
    } else {
      if (height[leftIndex] > leftMax) {
        leftMax = height[leftIndex];
      } else {
        count += leftMax - height[leftIndex];
      }
      leftIndex++;
    }
  }
  return count;
}

console.log(trap([0,1,0]));