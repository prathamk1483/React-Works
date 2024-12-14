import { useState } from "react"

function App() {
  const [color,setColor] = useState("black")
  return (
    <>
      <div className="h-screen w-full" style={{backgroundColor : color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 duration-400">
          <div className="flex flex-wrap justify-center gap-10 shadow-xl bg-white px-3 py-2 rounded-xl shadow-xl text-white">
            <button className="outline-none px-2 py-2 rounded-lg shadow-xl" style={{backgroundColor : "red"}} onClick={()=>{setColor("red")}}>Red</button>
            <button className="outline-none px-2 py-2 rounded-lg shadow-xl" style={{backgroundColor : "green"}} onClick={()=>{setColor("green")}}>Green</button>
            <button className="outline-none px-2 py-2 rounded-lg shadow-xl" style={{backgroundColor : "blue"}} onClick={()=>{setColor("blue")}}>Blue</button>
            <button className="outline-none px-2 py-2 rounded-lg shadow-xl" style={{backgroundColor : "orange"}} onClick={()=>{setColor("orange")}}>Orange</button>
            <button className="outline-none px-2 py-2 rounded-lg shadow-xl" style={{backgroundColor : "purple"}} onClick={()=>{setColor("purple")}}>Purple</button>
            <button className="outline-none px-2 py-2 rounded-lg shadow-xl" style={{backgroundColor : "aqua"}} onClick={()=>{setColor("aqua")}}>Aqua</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
