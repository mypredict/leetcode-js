// https://leetcode-cn.com/problems/candy/

var candy = function(ratings) {
  let count = 0;
  let direction = 'up';
  let currentNum = 0;
  ratings.forEach((rating, index) => {
    if (rating > ratings[index - 1] && direction === 'up') {
      currentNum++;
      count += currentNum;
      return;
    }
    
  });
  return 5;
};

console.log(candy([1,2,2]));