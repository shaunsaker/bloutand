const convertDataViewToUint8Array = (value: DataView) => {
  const { byteLength } = value;
  const uint8Array = new Uint8Array(byteLength);

  for (let i = 0; i < byteLength; i++) {
    uint8Array[i] = value.getUint8(i);
  }

  return uint8Array;
};

export default convertDataViewToUint8Array;
