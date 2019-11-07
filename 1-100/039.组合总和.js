// https://leetcode-cn.com/problems/combination-sum/

function combinationSum(candidates, target) {
  candidates.sort((a, b) => b - a);
  const res = [];
  const path = [];
  const minNum = candidates.slice(-1)[0];
  const reduceLoop = (target, start, path) => {
    if (target === 0) {
      return res.push(path.slice());
    }
    if (target < minNum) return;
    for (let i=start, j=candidates.length; i<j; i++) {
      path.push(candidates[i]);
      reduceLoop(target - candidates[i], i, path);
      path.pop();
    }
  }
  reduceLoop(target, 0, path);
  return res;
}

console.log(combinationSum([2,3,5,6,7], 7));