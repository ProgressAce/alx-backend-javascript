export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const dataViewObj = new DataView(buffer);

  try {
    dataViewObj.setInt8(position, value);
  } catch (error) {
    throw new Error('Position outside range');
  }

  return dataViewObj;
}
