const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

export const decodedValue = (colors) => {
  const colorLookup = COLORS.reduce((acc, cur, index) => {
    acc[cur] = index;
    return acc;
  }, {});

  return +`${colorLookup[colors[0]]}${colorLookup[colors[1]]}`;
};
