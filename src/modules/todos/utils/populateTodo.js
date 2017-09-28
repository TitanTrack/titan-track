export default ({
  key,
  allTodos,
}) => {
  const todo = allTodos[key];
  const children = todo.children ?
    Object.keys(todo.children).filter((isMember) => isMember) :
    [];
  return {
    key,
    ...todo,
    children,
  }
};
