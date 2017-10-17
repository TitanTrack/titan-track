export const objectToArr = (data = {}, sorterFn) => {
  const result = Object.keys(data).map((curKey) => ({
    ...data[curKey],
    id: curKey,
  }));
  console.log({result, data});
  if (sorterFn) { result.sort(sorterFn) };
  return result;
}
