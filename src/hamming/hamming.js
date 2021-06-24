export const compute = (str1, str2) => {
  if (str1.length === 0 && str2.length === 0) {
    return 0;
  }

  if (!str1) {
    throw new Error("left strand must not be empty");
  }

  if (!str2) {
    throw new Error("right strand must not be empty");
  }

  if (str1.length !== str2.length) {
    throw new Error("left and right strands must be of equal length");
  }

  let result = 0;

  for (let index = 0; index < str1.length; index++) {
    if (str1[index] !== str2[index]) {
      result++;
    }
  }

  return result;
};
