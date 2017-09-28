export default ({
  uid,
  type,
  todoKey,
}) => {
  const mainPath = `/todos/${uid}/${type}`;
  if (todoKey) return `${mainPath}/${todoKey}`
  return mainPath;
};
