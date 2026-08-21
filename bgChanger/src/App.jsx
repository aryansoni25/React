import { useState } from "react"

function App() {
const [color,setColor]=useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify center shadow-xl gap-3 bg-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-4  rounded-xl py-1 shadow-lg" style={{background:"red"} } onClick={()=>setColor("red")}>Red</button>
            <button className="outline-none px-4  rounded-xl py-1 shadow-lg" style={{background:"yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
            <button className="outline-none px-4  rounded-xl py-1 shadow-lg" style={{background:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
            <button className="outline-none px-4  rounded-xl text-white py-1 shadow-lg" style={{background:"Black"}} onClick={()=>setColor("black")}>Black</button>
            <button className="outline-none px-4  rounded-xl py-1 shadow-lg" style={{background:"White"}} onClick={()=>setColor("white")}>White</button>
            <button className="outline-none px-4  rounded-xl py-1 shadow-lg" style={{background:"green"}} onClick={()=>setColor("green")}>Green</button>
            <button className="outline-none px-4  rounded-xl py-1 shadow-lg" style={{background:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
            <button className="outline-none px-4  rounded-xl py-1 shadow-lg" style={{background:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
