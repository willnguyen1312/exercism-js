export const transform = (obj) => {
  return Object.entries(obj).reduce((acc, cur) => {
    const [key, value] = cur;

    value.forEach((item) => {
      acc[item.toLowerCase()] = +key;
    });

    return acc;
  }, {});
};
