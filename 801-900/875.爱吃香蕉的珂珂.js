// https://leetcode-cn.com/problems/koko-eating-bananas/

function canFinish(piles, H, mid) {
  let num = 0;
  piles.forEach((item) => {
    num += Math.ceil(item / mid);
  });
  return num <= H;
}

var minEatingSpeed = function (piles, H) {
  let left = 1;
  let right = Math.max(...piles);

  while (left < right) {
    const mid = left + parseInt((right - left) / 2);
    if (canFinish(piles, H, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

const piles = [332484035, 524908576, 855865114, 632922376, 222257295, 690155293, 112677673, 679580077, 337406589, 290818316, 877337160, 901728858, 679284947, 688210097, 692137887, 718203285, 629455728, 941802184];
const H = 823855818;
console.log(minEatingSpeed(piles, H));