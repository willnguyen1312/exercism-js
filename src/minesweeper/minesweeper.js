export const annotate = (input) => {
  const bomb = "*";
  const result = input.slice();

  const countBomb = (i, j) => {
    let count = 0;
    if (input[i - 1]?.[j] == bomb) {
      count++;
    }

    if (input[i + 1]?.[j] == bomb) {
      count++;
    }

    if (input[i]?.[j - 1] == bomb) {
      count++;
    }

    if (input[i]?.[j + 1] == bomb) {
      count++;
    }

    if (input[i - 1]?.[j - 1] == bomb) {
      count++;
    }

    if (input[i - 1]?.[j + 1] == bomb) {
      count++;
    }

    if (input[i + 1]?.[j - 1] == bomb) {
      count++;
    }

    if (input[i + 1]?.[j + 1] == bomb) {
      count++;
    }

    return count;
  };

  for (let i = 0; i < input.length; i++) {
    const row = input[i];

    for (let j = 0; j < row.length; j++) {
      const isBomb = input[i][j] === bomb;

      if (isBomb) {
        continue;
      }

      const count = countBomb(i, j);
      if (count) {
        result[i] = result[i].substr(0, j) + count + result[i].substr(j + 1);
      }
    }
  }

  return result;
};
