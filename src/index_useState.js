import { createRef, useState } from "react";
import ReactDOM from "react-dom";
import './index.css'

function FavoriteColor() {
  const [color, setColor] = useState("Red"); 
  let newColor = color === 'Red' ? 'Blue' : 'Red';
  return ( 
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button" className={newColor}
        onClick={() => setColor(newColor)}
      >{ newColor}</button>
    </>
  )
}

function Car() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
    </>
  )
}

ReactDOM.render(<Car />, document.getElementById('root'));