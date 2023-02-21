import logo from './logo.svg';
import './App.css';
import NavBar from "./NavBar.js"
import React from "react"
import data from "./data"
import Card from './Card';

function App() {
  const cards=data.map(obj=>{
    return(
      <Card
        key={obj.id}
        obj={obj}
      />
    )
  })
  return (
    <div className="App">
      <NavBar />
      <div className='all-cards'>
        {cards}
      </div>
    </div>
  );
}

export default App;
