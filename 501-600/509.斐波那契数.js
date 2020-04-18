// https://leetcode-cn.com/problems/fibonacci-number/

var fib = function(N) {
  let [i, j] = [0, 1];
  if (N === 0) return i;
  let index = 2;
  while (index < N) {
    [i, j] = [j, i + j];
    index++;
  }
  return i + j;
};

for(let i=0; i<=10; i++) {
  console.log(fib(i));
}