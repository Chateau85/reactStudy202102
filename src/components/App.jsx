import { useState } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const defaultTodos = Array.from({ length: 500 }, (_, id) => ({
  id,
  text: `일정 ${id}`,
  done: false,
}));

const App = ({ initialTodos = defaultTodos }) => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState(initialTodos);

  const handleInsert = () => {
    const text = input.trim();
    if (!text) return;

    setTodos((currentTodos) => [
      ...currentTodos,
      {
        id: currentTodos.reduce((maxId, todo) => Math.max(maxId, todo.id), -1) + 1,
        text,
        done: false,
      },
    ]);
    setInput('');
  };

  const handleToggle = (id) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };

  const handleRemove = (id) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };

  return (
    <PageTemplate>
      <TodoInput
        value={input}
        onChange={(event) => setInput(event.target.value)}
        onInsert={handleInsert}
      />
      <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
    </PageTemplate>
  );
};

export default App;
