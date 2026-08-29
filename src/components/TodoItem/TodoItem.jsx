import { memo } from 'react';
import './TodoItem.scss';

const TodoItem = ({ todo, onToggle, onRemove }) => (
  <div className="todo-item">
    <label className="todo-content">
      <input className="tick" type="checkbox" checked={todo.done} onChange={onToggle} />
      <span className={`text${todo.done ? ' done' : ''}`}>{todo.text}</span>
    </label>
    <button className="delete" type="button" onClick={onRemove} aria-label={`${todo.text} 삭제`}>
      삭제
    </button>
  </div>
);

export default memo(TodoItem);
