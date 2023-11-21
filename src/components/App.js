
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import regeneratorRuntime from "regenerator-runtime";

const App = () => {
  const[state,setState]=useState('');
  const[opt,setOpt]=useState([]);
  function handleChange(event){
    setState(event.target.value);
    getLoc(state);
  }


  async function getLoc(inp){
   try{
    const re=await fetch(`https://autocomplete.travelpayouts.com/places2?locale=en&types[]=airport&types[]=city&term=${inp}`);
    const res=await re.json();
    setOpt(res);
    console.log(res);
  }
  catch(err){
    console.log(err);
  }
}

  return (
    <div>
      <h1>Search for the cities</h1>
      <input value={state} type="text" onChange={handleChange} name="" id="" />
      
        <ol className="hue">{opt.map((elem,i)=>{
          return(<li key={i} onClick={()=>{setState(elem.name);console.log("click")}}>{elem.name}</li>);
        })}</ol>
    </div>
  )
}

export default App
