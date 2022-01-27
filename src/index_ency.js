
import { useState, useMemo, useEffect } from "react";
import ReactDOM from "react-dom";  
import axios from 'axios'
import ErrorApp from "./ErrorApp";
import CryptoJS  from 'crypto-js';


const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log('Now URL is: ', url);
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setData(data));
    axios(url).then(res => { 
      setData(res.data);
    }).catch(err => {  
      console.log('Error from AppJS: ', err.message)
    })
  }, [url]);

  return [data];
};

const doAESEncrption = (data) => { 
  
  var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123').toString();
  console.log('encrypted_text: ', ciphertext);
  sessionStorage.setItem('LpP7D8HZSkcDdS3suIJ6CpPSg', ciphertext);

  var bytes = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
  var originalText = bytes.toString(CryptoJS.enc.Utf8);
  
  console.log(JSON.parse(originalText)); 
}
 
const Home = () => {

  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/todos')
  const [data] = useFetch(url);

  const updateUrl = () => {
    console.log('BUTTON CLICKED')
    setUrl('https://jsonplaceholder.typicode.com/users');
  }
  useEffect(() => { 
    let userData = {
      "items":
      {
        "item":
          [
            {
              "id": "0001",
              "type": "donut",
              "name": "Cake",
              "ppu": 0.55,
              "batters":
              {
                "batter":
                  [
                    { "id": "1001", "type": "Regular" },
                    { "id": "1002", "type": "Chocolate" },
                    { "id": "1003", "type": "Blueberry" },
                    { "id": "1004", "type": "Devil's Food" }
                  ]
              },
              "topping":
                [
                  { "id": "5001", "type": "None" },
                  { "id": "5002", "type": "Glazed" },
                  { "id": "5005", "type": "Sugar" },
                  { "id": "5007", "type": "Powdered Sugar" },
                  { "id": "5006", "type": "Chocolate with Sprinkles" },
                  { "id": "5003", "type": "Chocolate" },
                  { "id": "5004", "type": "Maple" }
                ]
            }
    
          ]
      }
    }
    doAESEncrption(userData);

  },[])
 
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

ReactDOM.render(<Home />, document.getElementById("root"));