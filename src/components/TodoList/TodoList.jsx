import { memo } from 'react';
import TodoItem from '../TodoItem';

const TodoList = ({ todos, onToggle, onRemove }) => (
  <div aria-label="일정 목록">
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        onToggle={() => onToggle(todo.id)}
        onRemove={() => onRemove(todo.id)}
      />
    ))}
  </div>
);

export default memo(TodoList);
