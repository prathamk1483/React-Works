import { useState } from 'react';
import './App.css'

function App() {
  let [counter,setCounter] = useState(15);
  // let counter =5;

  const addValue = ()=>{
    if(counter == 20) return;
    counter += 1;
    setCounter(counter);
    console.log(Math.random()+" "+ counter);
  };

  const remValue = ()=>{
    if(counter == 0) return;
    counter -=1;
    setCounter(counter);
    console.log(counter);
  };
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={remValue}>Remove Value</button>
    </>
  )
}

export default App
