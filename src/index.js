
import { useState, useMemo, useEffect } from "react";
import ReactDOM from "react-dom";  
import axios from 'axios'


const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
    axios
      (url).then(res => {
      debugger;
    }).catch(err => { 
      debugger;
    })
  }, [url]);

  return [data];
};

const Home = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

ReactDOM.render(<Home />, document.getElementById("root"));