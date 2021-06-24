const STOP = "STOP";

// const mapping = {
//   AUG: "Methionine",
//   UUU: "Phenylalanine",
//   UUC: "Phenylalanine",
//   UUA: "Leucine",
//   UUG: "Leucine",
//   UCU: "Serine",
//   UCC: "Serine",
//   UCA: "Serine",
//   UCG: "Serine",
//   UAU: "Tyrosine",
//   UAC: "Tyrosine",
//   UGU: "Cysteine",
//   UGC: "Tyrosine",
//   UGG: "Tryptophan",
//   UAA: STOP,
//   UAG: STOP,
//   UGA: STOP,
// };

const invert = (obj) =>
  Object.fromEntries(
    Object.entries(obj).flatMap(([protein, codons]) =>
      codons.map((codon) => [codon, protein])
    )
  );

const mapping = invert({
  Methionine: ["AUG"],
  Phenylalanine: ["UUU", "UUC"],
  Leucine: ["UUA", "UUG"],
  Serine: ["UCU", "UCC", "UCA", "UCG"],
  Tyrosine: ["UAU", "UAC"],
  Cysteine: ["UGU", "UGC"],
  Tryptophan: ["UGG"],
  [STOP]: ["", "UAA", "UAG", "UGA"],
});

export const translate = (value = "") => {
  const result = [];

  for (let index = 0; index < value.length; index += 3) {
    const sub = value.substring(index, index + 3);

    if (!mapping[sub]) {
      throw new Error("Invalid codon");
    }

    if (mapping[sub] === STOP) {
      return result;
    }

    if (mapping[sub]) {
      result.push(mapping[sub]);
    }
  }

  return result;
};

// export const translate = (rna = "") => {
//   const protein = TRANSLATIONS[rna.slice(0, 3)];
//   if (!protein) throw new Error("Invalid codon");
//   return protein === STOP ? [] : [protein, ...translate(rna.slice(3))];
// };
