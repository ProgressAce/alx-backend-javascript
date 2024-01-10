export default function setFromArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('<arr> should be an array of type of any elements');
  }

  const mrSet = new Set(arr);
  return mrSet;
}
