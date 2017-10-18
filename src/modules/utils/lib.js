export const objToArr = (data, sorterFn) => {
  const fixedData = data || {};
  const result = Object.keys(fixedData).map((curKey) => {
    const curElem = fixedData[curKey] || {};
    return {
      ...curElem,
      id: curKey,
    };
  });
  if (sorterFn) { result.sort(sorterFn) };
  return result;
}

export const generateSort = (sorterFn) => ({
  mapperFn,
  isDescending,
}) => (a, b) => {
  const coefficient = isDescending ? -1 : 1;
  const aMapped = mapperFn(a);
  const bMapped = mapperFn(b);
  const rawResult = sorterFn(aMapped, bMapped);
  return rawResult * coefficient;
}

const numericSort = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

const alphaNumericSort = (a, b) => {
  const aLower = a.toLowerCase();
  const bLower = b.toLowerCase();
  return numericSort(aLower, bLower);
};

export const generateNumericSort = generateSort(numericSort);
export const generateAlphanumericSort = generateSort(alphaNumericSort);
