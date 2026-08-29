import { cleanup, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it } from 'vitest';
import App from './App';

const todos = [
  { id: 0, text: '일정 0', done: false },
  { id: 1, text: '일정 1', done: false },
];

const renderApp = () => render(<App initialTodos={todos} />);

afterEach(cleanup);

describe('일정 관리', () => {
  it('일정을 추가하고 입력값을 비운다', async () => {
    const user = userEvent.setup();
    renderApp();
    const input = screen.getByRole('textbox', { name: '새 일정' });

    await user.type(input, '테스트 작성');
    await user.click(screen.getByRole('button', { name: '추가' }));

    expect(screen.getByText('테스트 작성')).toBeInTheDocument();
    expect(input).toHaveValue('');
  });

  it('Enter 키로 일정을 추가한다', async () => {
    const user = userEvent.setup();
    renderApp();
    const input = screen.getByRole('textbox', { name: '새 일정' });

    await user.type(input, '키보드로 추가{Enter}');

    expect(screen.getByText('키보드로 추가')).toBeInTheDocument();
  });

  it('일정 완료 상태를 토글한다', async () => {
    const user = userEvent.setup();
    renderApp();
    const text = screen.getByText('일정 0');
    const checkbox = within(text.closest('.todo-item')).getByRole('checkbox');

    await user.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(text).toHaveClass('done');
  });

  it('일정을 삭제한다', async () => {
    const user = userEvent.setup();
    renderApp();

    await user.click(screen.getByRole('button', { name: '일정 0 삭제' }));

    expect(screen.queryByText('일정 0')).not.toBeInTheDocument();
  });

  it('공백뿐인 일정은 추가하지 않는다', async () => {
    const user = userEvent.setup();
    renderApp();
    const input = screen.getByRole('textbox', { name: '새 일정' });

    await user.type(input, '   ');
    await user.click(screen.getByRole('button', { name: '추가' }));

    expect(screen.getAllByRole('checkbox')).toHaveLength(2);
    expect(input).toHaveValue('   ');
  });
});
