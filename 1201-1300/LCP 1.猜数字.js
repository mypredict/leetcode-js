// https://leetcode-cn.com/problems/guess-numbers/

var game = function(guess, answer) {
  return guess.filter((num, index) => num === answer[index]).length;
};

console.log(game([2,2,3], [3,2,1]));