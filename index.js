function add(...args) {
  let argsLen = 0;
  let sum = 0;
  const handleAdd = (...args) => {
    const currentSum = args.reduce((a, b) => a + b, 0);
    argsLen += args.length;
    sum += currentSum;
    if (argsLen >= 3) return sum;
    return handleAdd;
  };
  return handleAdd(...args);
}

console.log(add(1)(3)(2, 5, 6));
console.log(add(1));
console.log(add(1)(3));
console.log(add(1, 3));
console.log(add(2, 5, 6));
console.log(add(2, 3, 4));
console.log(add(2)(3, 4));
console.log(add(2)(3)(4));
console.log(add(2, 3)(4));

Promise.all([])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

Promise.prototype.all = (arr) => {
  if (!arr.length) {
    return Promise.resolve(arr);
  }
  const resultArr = [];
  return new Promise((resolve, reject) => {
    arr.forEach((promise) => {
      if (promise instanceof Promise.prototype) {
        promise
          .then((data) => {
            resultArr.push(data);
            if (resultArr.length === arr.length) {
              resolve(resultArr);
            }
          })
          .catch((err) => {
            reject(err);
          });
      } else {
        Promise.resolve(promise)
          .then((data) => {
            resultArr.push(data);
            if (resultArr.length === arr.length) {
              resolve(resultArr);
            }
          })
          .catch((err) => {
            reject(err);
          });
      }
    });
  });
};
