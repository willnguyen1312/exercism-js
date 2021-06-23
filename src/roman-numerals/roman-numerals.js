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
