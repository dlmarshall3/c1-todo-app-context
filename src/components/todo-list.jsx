import { useTodoContext } from "../context/todo.context";

export default function TodoList() {
  const { todos, setTodos, updating, setUpdating } = useTodoContext();

  function updateTodo(id, newText) {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleUpdating(id) {
    setUpdating(!updating);
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, updating: !todo.updating } : todo
      )
    );
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li className="todo-item" key={todo.id}>
          <div className="input-group">
            <input
              type="checkbox"
              disabled={todo.updating && updating ? true : false}
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.updating && updating ? (
              <input
                type="text"
                value={todo.text}
                onChange={(e) => updateTodo(todo.id, e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" ? toggleUpdating(todo.id) : null
                }
              />
            ) : (
              <div
                className="todo-item__text"
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </div>
            )}
          </div>
          <div className="btn-group">
            <button
              disabled={
                (todo.updating && updating) || todo.completed ? true : false
              }
              onClick={() => toggleUpdating(todo.id)}
            >
              Edit
            </button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
