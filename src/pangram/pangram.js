export const isPangram = (str) => {
  const alphabetSet = new Set("abcdefghijklmnopqrstuvwxyz");

  for (let index = 0; index < str.length; index++) {
    const letter = str[index].toLowerCase();
    if (alphabetSet.has(letter)) {
      alphabetSet.delete(letter);
    }
  }

  return alphabetSet.size === 0;
};
