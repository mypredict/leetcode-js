// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

function lengthOfLongestSubstring(s) {
  let longestSubstringsLength = 0;
  let start = 0;
  const obj = {};
  for (let i=0, j=s.length; i<j; i++) {
    const currentChar = s[i];
    if (obj[currentChar] >= start) {
      start = obj[currentChar] + 1;
    }
    obj[currentChar] = i;
    longestSubstringsLength = Math.max(longestSubstringsLength, i - start + 1);
  }
  return longestSubstringsLength;
}

console.log(lengthOfLongestSubstring('abcabcbb'));
