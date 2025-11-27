import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';
import TodoControls from '../TodoControls/TodoControls';

export default function TodoPanel() {
  return (
    <section className="todo-panel" role="region" aria-label="Todo list">
      <TodoInput />

      <div className="todo-panel__section">
        <TodoList />
        <TodoControls />
      </div>

      <p className="todo-panel__hint">Drag and drop to reorder list</p>
    </section>
  );
}
