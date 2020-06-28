// https://leetcode-cn.com/problems/capacity-to-ship-packages-within-d-days/

function canFinish(weights, D, mid) {
  let d = 0;
  let intervalWeight = 0;
  weights.forEach((weight) => {
    intervalWeight += weight;
    if (intervalWeight > mid) {
      d++;
      intervalWeight = weight;
    }
  });
  return d < D;
}

var shipWithinDays = function (weights, D) {
  let leftBearing = 0;
  let rightBearing = 1;
  weights.forEach((weight) => {
    rightBearing += weight;
    if (weight > leftBearing) {
      leftBearing = weight;
    }
  });

  while (leftBearing < rightBearing) {
    const mid = leftBearing + parseInt((rightBearing - leftBearing) / 2);
    console.log(mid)
    if (canFinish(weights, D, mid)) {
      console.log(333)
      rightBearing = mid;
    } else {
      leftBearing = mid + 1;
    }
  }

  return leftBearing;
};

const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const D = 5;

console.log(shipWithinDays(weights, D));