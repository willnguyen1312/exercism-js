export const gigasecond = (moment) => {
  return new Date(moment.getTime() + Math.pow(10, 12));
};
