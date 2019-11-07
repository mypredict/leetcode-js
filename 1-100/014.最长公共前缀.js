// https://leetcode-cn.com/problems/longest-common-prefix/

function longestCommonPrefix(strs) {
  let commonPrefix = '';
  if (!strs.length) {
    return commonPrefix;
  }
  for (let i=0, j=strs[0].length; i<j; i++) {
    if (strs.every((char) => char[i] === strs[0][i])) {
      commonPrefix += strs[0][i];
    } else {
      break;
    }
  }
  return commonPrefix;
}

console.log(longestCommonPrefix(["flower","flow","fliwht"]));
