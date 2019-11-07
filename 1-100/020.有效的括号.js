// https://leetcode-cn.com/problems/valid-parentheses/

function isValid(s) {
  const cacheArray = [s[0]];
  if (s.length === 0) {
    return true;
  }
  if (s.length === 1) {
    return false;
  }
  for (let i=1, j=s.length; i<j; i++) {
    switch (s[i]) {
      case '}':
        if (cacheArray.pop() === '{') {
          break;
        } else {
          return false;
        }
      case ']':
        if (cacheArray.pop() === '[') {
          break;
        } else {
          return false;
        }
      case ')':
        if (cacheArray.pop() === '(') {
          break;
        } else {
          return false;
        }
      default:
        cacheArray.push(s[i]);
    }
  }
  if (cacheArray.length) {
    return false;
  }
  return true;
}

console.log(isValid('()[]{}'));