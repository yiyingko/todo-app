export default function TodoItem() {
  return (
    <li className="todo__item">
      <label className="todo__label">
        <input type="checkbox" className="todo__checkbox" />
        <span className="todo__text">Task One</span>
      </label>
    </li>
  );
}

// export default function TodoItem({ todo }) {
//   return (
//     <li className="todo__item">
//       <label className="todo__label">
//         <input
//           type="checkbox"
//           className="todo__checkbox"
//           checked={todo.completed}
//           onChange={() => {}}
//         />
//         <span className="todo__text">{todo.text}</span>
//       </label>
//     </li>
//   );
// }
