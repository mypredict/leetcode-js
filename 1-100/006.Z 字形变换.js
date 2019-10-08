// https://leetcode-cn.com/problems/zigzag-conversion/

function convert(s, numRows) {
  if (numRows === 1) {
    return s;
  }
  const rows = Array(Math.min(s.length, numRows)).fill('');
  let currentRow = 0;
  let direction = -1;
  for (let i=0, j=s.length; i<j; i++) {
    rows[currentRow] += s[i];
    if (currentRow === 0 || currentRow + 1 === numRows) {
      direction = -direction;
    }
    currentRow += direction;
  }
  return rows.join('');
}

console.log(convert('LEETCODEISHIRING', 3));
