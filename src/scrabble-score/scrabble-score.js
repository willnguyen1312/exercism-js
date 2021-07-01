const groups = [
  [["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"], 1],
  [["D", "G"], 2],
  [["B", "C", "M", "P"], 3],
  [["F", "H", "V", "W", "Y"], 4],
  [["K"], 5],
  [["J", "X"], 8],
  [["Q", "Z"], 10],
];

const lookup = {};

groups.forEach((item) => {
  const [value, key] = item;

  value.forEach((stuff) => {
    lookup[stuff.toLowerCase()] = key;
  });
});

export const score = (str) => {
  return str
    .toLowerCase()
    .split("")
    .reduce((acc, cur) => {
      acc += lookup[cur];
      return acc;
    }, 0);
};
