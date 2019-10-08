// https://leetcode-cn.com/problems/container-with-most-water/

function maxArea(heights) {
  let currentMaxArea = 0;
  let start = 0;
  let end = heights.length - 1;
  while (start !== end) {
    const width = end - start;
    let height = 0;
    if (heights[start] > heights[end]) {
      height = heights[end];
      end--;
    } else {
      height = heights[start];
      start++;
    }
    currentMaxArea = Math.max(width * height, currentMaxArea);
  }
  return currentMaxArea;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
