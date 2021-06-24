export const isArmstrongNumber = (number) => {
  let sum = 0;
  const str = number.toString();
  const length = str.length;

  for (let index = 0; index < length; index++) {
    const num = +str[index];
    sum += Math.pow(num, length);
  }

  return sum === number;
};
