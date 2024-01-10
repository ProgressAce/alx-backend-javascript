export default function hasValuesFromArray(set, array) {
  // checks if a set has all the values of the given array

  for (const x of array) {
    if (!set.has(x)) return false;
  }
  return true;
}
