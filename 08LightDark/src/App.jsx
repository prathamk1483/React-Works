import ThemeBtn from "./components/ThemeBtn/ThemeBtn";
import Card from "./components/Card/Card";
import { useEffect, useState } from "react";

function App() {

  const [dark , setDark] = useState("light");
  useEffect( () => {
    document.querySelector('html').classList.remove("light","dark");
    document.querySelector('html').classList.add(dark);
  } ,[dark] );
  return (

      
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn mode={dark} toggle={setDark} />
                    </div>
                    <div className="w-full max-w-sm mx-auto">
                       <Card mode={dark}/>
                    </div>
                </div>
            </div>

  )
}

export default App
