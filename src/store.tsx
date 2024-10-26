import { createStore } from 'redux';

interface Todo {
  text: string;
  isDone: boolean;
  id: number;
}

interface State {
  todos: Todo[];
}

interface AddTodoAction {
  type: 'ADD_TODO';
  payload: string; 
}

interface DeleteTodoAction {
  type: 'DELETE_TODO';
  payload: number; 
}

interface ToggleTodoAction {
  type: 'TOGGLE_TODO';
  payload: number; 
}

// Union Type
type Action = AddTodoAction | DeleteTodoAction | ToggleTodoAction;

const initialState: State = {
  todos: []
};

const todoReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, { text: action.payload, isDone: false, id: Date.now() }]
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
        )
      };
    default:
      return state;
  }
};

// Create store
const store = createStore(todoReducer);

// RootState type export
export type RootState = ReturnType<typeof store.getState>;

export default store;