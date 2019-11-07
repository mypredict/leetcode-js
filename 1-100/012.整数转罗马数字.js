// https://leetcode-cn.com/problems/integer-to-roman/

function intToRoman(num) {
  const convertNumber = (currentFigureNumber, currentFigure) => {
    if (!currentFigureNumber) {
      return '';
    }
    const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    switch (currentFigure) {
      case 1:
        
        return num;
      case 10:
        return num;
      case 100:
        return num;
      default:
        return
    }
  }
  let romanNumber = '';
  let currentFigure = 1;
  while (num > 0) {
    romanNumber = `${convertNumber(num % 10, currentFigure)}${romanNumber}`;
    num = parseInt(num / 10);
    currentFigure *= 10;
  }
  return romanNumber;
}

console.log(intToRoman(58));

// 贪心算法
function intToRoman2(num) {
  return romanNumber;
}

console.log(intToRoman2(58));
