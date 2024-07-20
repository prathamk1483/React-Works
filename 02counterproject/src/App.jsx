import './App.css'

function App() {
  let counter =5;

  const addValue = ()=>{
    counter += 1;
    console.log(Math.random()+" "+ counter);
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value : 5</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button>Remove Value</button>
    </>
  )
}

export default App
