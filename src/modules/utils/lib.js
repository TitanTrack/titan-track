export const objectToArr = (data, sorterFn) => {
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

export const generateAlphanumericSort = ({
  transformItemFn,
  isDescending,
}) => (a, b) => {
  const aTransformed = transformItemFn(a);
  const bTransformed = transformItemFn(b);
  const aLower = aTransformed.toLowerCase();
  const bLower = bTransformed.toLowerCase();
  const coefficient = isDescending ? -1 : 1;
  if (aLower < bLower) return -1 * coefficient;
  if (aLower > bLower) return 1 * coefficient;
}
