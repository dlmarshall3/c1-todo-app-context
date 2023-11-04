import { useTodoContext } from "../context/todo.context";

export default function TodoInput() {
  const { todos, setTodos, newTodo, setNewTodo } = useTodoContext();

  function addTodo() {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: newTodo, completed: false, updating: false },
      ]);
      setNewTodo("");
    }
  }

  return (
    <input
      type="text"
      placeholder="Add a new to-do"
      value={newTodo}
      onChange={(e) => setNewTodo(e.target.value)}
      onKeyDown={(e) => (e.key === "Enter" ? addTodo() : null)}
    />
  );
}
