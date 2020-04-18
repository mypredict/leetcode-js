// https://leetcode-cn.com/problems/climbing-stairs/

var climbStairs = function(n) {
  // if (n === 1) {
  //   return 1;
  // }
  // if (n === 2) {
  //   return 2;
  // }
  // return climbStairs(n - 1) + climbStairs(n - 2);

  const nCache = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    nCache[i] = nCache[i - 1] + nCache[i - 2];
  }
  return nCache[n];
};

console.log(climbStairs(45));