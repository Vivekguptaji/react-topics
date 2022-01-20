import { useCallback, useState } from "react";
import ReactDOM from "react-dom";
import Todos from "./Todos";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };//
console.log('Index.js render')
  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Counts: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));