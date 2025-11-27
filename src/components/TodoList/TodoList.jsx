import TodoItem from '../TodoItem/TodoItem';

export default function TodoList() {
  return (
    <>
      <ul className="todos">
        <TodoItem />
      </ul>
    </>
  );
}

// export default function TodoList({ todos }) {
//   return (
//     <ul className="todos">
//       {todos.map(todo => (
//         <TodoItem key={todo.id} todo={todo} />
//       ))}
//     </ul>
//   );
// }
