// https://leetcode-cn.com/problems/rabbits-in-forest/

var numRabbits = function(answers) {
  let count = 0;
  const nums = {};
  answers.forEach((answer) => {
    if (answer === 0) {
      count++;
      return;
    }
    if (!nums[answer]) {
      nums[answer] = answer + 1;
      count += nums[answer];
    }
  });
  return count;
};

console.log(numRabbits([1, 1, 2]));