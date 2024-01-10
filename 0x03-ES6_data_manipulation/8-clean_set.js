export default function cleanSet(set, startString) {
  // returns a string of all the set values that start with a specific string
  const startStrLength = startString.length;
  let strSet = '';
  let i = 0;

  if (startString === '') return strSet;

  for (const value of set) {
    if (value.startsWith(startString)) {
      if (i === 0) {
        strSet += value.slice(startStrLength);
      } else {
        strSet += `-${value.slice(startStrLength)}`;
      }
    }
    i += 1;
  }
  return strSet;
}
