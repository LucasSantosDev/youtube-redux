export const dot3 = (text, numberPoints = 70) => {
  return text.length >= numberPoints
    ? `${text.substring(0, numberPoints)}...`
    : text;
};
