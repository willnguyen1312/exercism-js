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
  const firstColor = colors[0];
  const secondColor = colors[1];
  const colorLookup = COLORS.reduce((acc, cur, index) => {
    acc[cur] = index.toString();
    return acc;
  }, {});

  return Number(colorLookup[firstColor] + colorLookup[secondColor]);
};
