export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  let idx = 0;

  for (const value of array) {
    newArray[idx] = appendString + value;
    idx += 1;
  }

  return newArray;
}
