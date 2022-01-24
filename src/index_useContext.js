import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom";
import Todos from "./Todos";

const UserContext = createContext();

function App() {
  const [user, setUser] = useState("Vivek Gupta");

  return ( 
    <UserContext.Provider value={user}>
      <h1>{`Welcome ${user}!`}</h1>
      <Component1 user={user} />
    </UserContext.Provider> 
  );
}

function Component1() {
  return (
    <>
      <h1>Component 2</h1>
      <Component2 />
    </>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 3</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 4</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 4</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));