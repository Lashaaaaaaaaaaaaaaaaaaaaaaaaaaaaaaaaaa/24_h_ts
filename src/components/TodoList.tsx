import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { RootState } from '../store';



interface Todo {
  id: number;
  text: string;
  isDone: boolean;
}

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos); 
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  const handleToggle = (id: number) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo: Todo) => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => handleToggle(todo.id)}>
              {todo.isDone ? 'Undo' : 'Done'}
            </button>
            <button onClick={() => handleDelete(todo.id)} style={{ color: 'red' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
