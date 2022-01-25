
import { useState, useMemo, useEffect } from "react";
import ReactDOM from "react-dom";  
import axios from './axios'
import ErrorApp from "./ErrorApp";


const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log('Now URL is: ', url);
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setData(data));
    axios(url).then(res => {
      debugger;
      setData(res.data);
    }).catch(err => { 
      debugger;
      console.log('Error from AppJS: ', err.message)
    })
  }, [url]);

  return [data];
};

const Home = () => {

  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/todos')
  const [data] = useFetch(url);

  const updateUrl = () => {
    console.log('BUTTON CLICKED')
    setUrl('https://jsonplaceholder.typicode.com/users');
  }
  
  return (
    <>
      <button onClick={updateUrl}>Change URL</button>
      {data &&
        data.map((item) => {
          return <p key={item.id ? item.id : item.userId}>{item.title ? item.title : item.username}</p>;
        })}
    </>
  );
};

ReactDOM.render(<ErrorApp />, document.getElementById("root"));