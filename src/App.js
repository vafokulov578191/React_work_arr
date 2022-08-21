import React, { useEffect, useState } from "react";
import './App.css';
import User from "./Components/User";
import Form from "./Components/Form";


function App() {
  let [arr, Setarr] = useState([
  {
    id: 1,
    name: 'Javascript',
    Title: 'Facebook'
  },
  {
    id: 2,
    name: 'Alex',
    Title: 'Adams'
  },
  {
    id: 2,
    name: 'Mike',
    Title: 'Mikels'
  }
  ])

  let [name, Setname] = useState('')
  let [Title, Setitle] = useState('')
  

  useEffect(() => {
    // console.log(name);
  },[name])

  useEffect(() => {
    // console.log(Title);
  },[Title])


  return (
    <div className="App">
      <div className="form">
        <Form arr={arr} onChangearr={Setarr} name={name} onChangename={Setname} Title={Title} onChangeTitle={Setitle} />
        <input type="text"  />
      </div>
        <div className="user">
          {
            arr.map((item, index) => <User key={index} {...item}/>)
          }
        </div>
    </div>
  );
}

export default App;