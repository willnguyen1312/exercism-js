export const reverseString = (str) => {
  const length = str.length;
  let result = "";

  for (let index = 0; index < str.length; index++) {
    const letter = str[length - 1 - index];
    result += letter;
  }

  return result;
};
