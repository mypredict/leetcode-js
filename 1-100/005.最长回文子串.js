// https://leetcode-cn.com/problems/longest-palindromic-substring/

// 动态规划
function longestPalindrome1(s) {

  return 1;
}

console.log(longestPalindrome1('babad'));


// 中心扩散法
function longestPalindrome2(s) {
  let currentLongestSubstring = '';
  for (let i=0, j=s.length; i<j; i++) {
    // 奇数位
    let currentOddSubstring = s[i];
    let startOddIndex = i - 1;
    let endOddIndex = i + 1;
    while (s[startOddIndex] === s[endOddIndex] && s[startOddIndex]) {
      currentOddSubstring = s[startOddIndex] + currentOddSubstring + s[endOddIndex];
      startOddIndex--;
      endOddIndex++;
    }
    if (currentOddSubstring.length > currentLongestSubstring.length) {
      currentLongestSubstring = currentOddSubstring;
    }
    // 偶数位
    let currentEvenSubstring = '';
    let startEvenIndex = i;
    let endEvenIndex = i + 1;
    while (s[startEvenIndex] === s[endEvenIndex] && s[startEvenIndex]) {
      currentEvenSubstring = s[startEvenIndex] + currentEvenSubstring + s[endEvenIndex];
      startEvenIndex--;
      endEvenIndex++;
    }
    if (currentEvenSubstring.length > currentLongestSubstring.length) {
      currentLongestSubstring = currentEvenSubstring;
    }
  }
  return currentLongestSubstring;
}

console.log(longestPalindrome2('babad'));


// Manacher 算法
function longestPalindrome3(s) {

  return 1;
}

console.log(longestPalindrome3('babad'));
