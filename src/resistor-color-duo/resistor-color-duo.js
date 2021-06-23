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
  const firstIndex = COLORS.indexOf(colors[0]);
  const secondIndex = COLORS.indexOf(colors[1]);

  return firstIndex * 10 + secondIndex;
};
