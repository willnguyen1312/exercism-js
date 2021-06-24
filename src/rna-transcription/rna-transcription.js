const rnaLookup = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};

export const toRna = (value) => {
  let result = "";

  for (let index = 0; index < value.length; index++) {
    const element = value[index];
    result += rnaLookup[element];
  }

  return result;
};
