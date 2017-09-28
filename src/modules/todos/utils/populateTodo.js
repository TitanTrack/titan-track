export default ({
  key,
  allTodos,
}) => {
  const todo = allTodos[key];
  const children = todo.children ?
    Object.keys(todo.children).filter((childKey) => todo.children[childKey]) :
    [];
  return {
    key,
    ...todo,
    children,
  }
};
