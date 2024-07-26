import { createContext, ReactNode, useContext, useState, useEffect } from "react";
import * as todoApi from "../api/todo";
import { Todo } from "../types/todotpes";

interface TodoContextValue {
  todos: Todo[];
  onAddTodo: (todo: Partial<Todo>) => Promise<void>;
  onDeleteTodo: (id: number) => Promise<void>;
}

const TodoContext = createContext<TodoContextValue | null>(null);

interface TodoContextProps {
  children: ReactNode;
}

const TodoContextProvider = ({ children }: TodoContextProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    try {
      const res = await todoApi.getTodos();
      setTodos(res.data.todos);
    } catch (err) {
      console.log(err);
    }
  };

  const onAddTodo = async (todo: Partial<Todo>) => {
    if (!todo.title) {
      return alert("Title is required");
    }
    await todoApi.createTodo(todo);
    fetchTodos();
  };

  const onDeleteTodo = async (id: number) => {
    await todoApi.deleteTodo(id);
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const value: TodoContextValue = { todos, onAddTodo, onDeleteTodo };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;

export const useTodo = () => {
  const ctx = useContext(TodoContext);
  if (!ctx) {
    throw new Error("useTodo must be used within a TodoContextProvider");
  }
  return ctx;
};
