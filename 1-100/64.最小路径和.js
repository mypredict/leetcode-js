// https://leetcode-cn.com/problems/minimum-path-sum/

var minPathSum = function(grid) {
  const m = grid[0].length;
  const n = grid.length;
  const minGrid = [[]];
  minGrid[0][0] = grid[0][0];
  for (let i = 1; i < n; i++) {
    minGrid[i] = [];
    minGrid[i][0] = minGrid[i - 1][0] + grid[i][0];
  }
  for (let j = 1; j < m; j++) {
    minGrid[0][j] = minGrid[0][j - 1] + grid[0][j];
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      minGrid[i][j] = Math.min(minGrid[i - 1][j], minGrid[i][j - 1]) + grid[i][j];
    }
  }
  return minGrid[n - 1][m - 1];
};

console.log(minPathSum(
  [
    [1,3,1],
    [1,5,1],
    [4,2,1]
  ]
));