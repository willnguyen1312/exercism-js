// export const toRoman = (num) => {
//   let m = ["", "M", "MM", "MMM"];
//   let c = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
//   let x = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
//   let i = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

//   // Converting to roman
//   let thousands = m[Math.floor(num / 1000)];
//   let hundereds = c[Math.floor((num % 1000) / 100)];
//   let tens = x[Math.floor((num % 100) / 10)];
//   let ones = i[num % 10];

//   let ans = thousands + hundereds + tens + ones;

//   return ans;
// };

// const roman = {
//   M: 1000,
//   CM: 900,
//   D: 500,
//   CD: 400,
//   C: 100,
//   XC: 90,
//   L: 50,
//   XL: 40,
//   X: 10,
//   IX: 9,
//   V: 5,
//   IV: 4,
//   I: 1,
// };

// export const toRoman = (num) => {
//   if (!num) return 0;
//   let result = "";
//   for (let i of Object.keys(roman)) {
//     let c = Math.floor(num / roman[i]);
//     num -= c * roman[i];
//     result += i.repeat(c);
//   }
//   return result;
// };

export const toRoman = (value) => {
  let result = "";
  let numbers = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  let sym = [
    "I",
    "IV",
    "V",
    "IX",
    "X",
    "XL",
    "L",
    "XC",
    "C",
    "CD",
    "D",
    "CM",
    "M",
  ];

  let index = sym.length - 1;
  while (value > 0) {
    let div = Math.floor(value / numbers[index]);
    value = value % numbers[index];
    while (div--) {
      result = result + sym[index];
    }
    index--;
  }

  return result;
};

// Roman to decimal

export const romanToDecimal = (str) => {
  const mapRoman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let index = 0; index < str.length; index++) {
    const element = mapRoman[str[index]];
    const nextElement = mapRoman[str[index + 1]];

    if (nextElement > element) {
      result += nextElement - element;
      index++;
      continue;
    }

    result += element;
  }

  return result;
};
