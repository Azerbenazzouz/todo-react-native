import { Todo } from '@/types/todoTypes';
import { createContext, useState } from 'react';

interface TodoContextType {
  todos: Todo[];
  addTodo: (todo: string) => void;
  toggleTodo: (index: number) => void;
  removeTodo: (index: number) => void;
}

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: () => {},
  toggleTodo: () => {},
  removeTodo: () => {},
});

export const TodoProvider = ({children}: {children: React.ReactNode}) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (title: string) => {
        const newTodo: Todo = {
            id: Date.now(),
            title,
            completed: false,
            timeStamp: new Date().getTime(),
        };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const removeTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, toggleTodo, removeTodo }}>
            {children}
        </TodoContext.Provider>
    );
}

export default TodoProvider;