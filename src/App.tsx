import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import DoneTodos from './components/DoneTodos';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Todo App with Redux</h1>
      <AddTodo />
      <TodoList />
      <DoneTodos />
    </div>
  );
}

export default App;
