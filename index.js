const aa = new Set([{a: 1}]);
const bb = aa.add(2, 3, 4)
console.log(aa)
console.log(bb)
console.log(aa === bb)