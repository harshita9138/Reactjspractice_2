import { useState } from "react"

function App() {

const[color, setColor]=useState("black");
  return (
    <>
     <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}}>
        <h1 className="text-white flex flex-wrap justify-center  px-3 py-7 ">Click on buttons to change background color</h1>
        <div className="flex flex-wrap justify-center fixed bottom-12 inset-x-0 px-2">
        
        <div className="flex flex-wrap justify-center shadow-lg bg-white px-3 py-2 rounded-3xl gap-3">
          <button onClick={()=>setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"red"}}>Red</button>
            <button onClick={()=>setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"green"}}>Green</button>
            <button onClick={()=>setColor("pink")}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"pink"}}>Pink</button>
            <button onClick={()=>setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"blue"}}>Blue</button>
            <button onClick={()=>setColor("brown")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"brown"}}>Brown</button>
            
          </div>
        </div>
     </div>
    </>
  )
}

export default App
