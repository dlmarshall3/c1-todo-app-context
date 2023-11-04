import TodoStorage from "./context/todo.context";
import Header from "./components/header";
import "./App.css";
import TodoInput from "./components/todo-input";
import TodoList from "./components/todo-list";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoInput />
      <TodoList />
    </div>
  );
}

function AppWrapper() {
  return (
    <TodoStorage>
      <App />
    </TodoStorage>
  );
}

export default AppWrapper;