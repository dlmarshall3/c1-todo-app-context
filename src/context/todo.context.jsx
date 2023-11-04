import { createContext, useContext, useState, useMemo } from "react";

const TodoContext = createContext();

export default function TodoStorage({ children }) {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [updating, setUpdating] = useState(false);

  const contextValues = useMemo(() => ({
    todos, setTodos, newTodo, setNewTodo, updating, setUpdating
  }));

  return (
    <TodoContext.Provider value={contextValues}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodoContext(){
    return useContext(TodoContext);
}
