import './TodoInput.scss';

const TodoInput = ({ value, onChange, onInsert }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') onInsert();
  };

  return (
    <div className="todo-input">
      <label className="visually-hidden" htmlFor="new-todo">새 일정</label>
      <input
        id="new-todo"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder="새 일정을 입력하세요"
      />
      <button className="add-button" type="button" onClick={onInsert}>추가</button>
    </div>
  );
};

export default TodoInput;
