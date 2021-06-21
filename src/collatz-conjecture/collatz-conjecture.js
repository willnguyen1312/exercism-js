export const steps = (n) => {
  if (n <= 0) {
    throw new Error("Only positive numbers are allowed");
  }

  let result = 0;
  let current = n;

  while (current !== 1) {
    if (current % 2) {
      current = 3 * current + 1;
    } else {
      current = current / 2;
    }

    result++;
  }

  return result;
};

// export const stepsRecursive = (n, result = 0) => {
//   if (n <= 0) {
//     throw new Error("Only positive numbers are allowed");
//   }

//   if (n === 1) {
//     return result;
//   }

//   if (n % 2) {
//     return stepsRecursive(3 * n + 1, result + 1);
//   }

//   return stepsRecursive(n / 2, result + 1);
// };
