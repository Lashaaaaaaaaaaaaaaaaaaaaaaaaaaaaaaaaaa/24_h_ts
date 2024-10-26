import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store'; 

interface Todo {
  id: number;
  text: string;
  isDone: boolean;
}

const DoneTodos: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos); 
  const doneTodos = todos.filter((todo: Todo) => todo.isDone); 

  return (
    <div>
      <h2>Done Todos</h2>
      <ul>
        {doneTodos.map((todo: Todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default DoneTodos;
