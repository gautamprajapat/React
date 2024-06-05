import { useState } from 'react';

import './App.css'

function App() {
  const [color, setColor] = useState()

  
  return (
<>
    <div className="w-full h-screen duration-200 bg-gray-500"
    style={{backgroundColor:color}}>

      <h1 className='text-green-500 '>test...............................................................................</h1>
     <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
                <button className='outline-none px-4 py-2  rounded-md text-white'
                onClick={()=>setColor("red")}
                style={{backgroundColor:"red"}}>
                  Red</button>
                  <button className='outline-none px-4 py-2 rounded-md text-white'
                  onClick={()=>setColor("yellow")}
                style={{backgroundColor:"yellow"}}>
                  yellow</button>
                  <button className='outline-none px-4 py-2 rounded-md text-white'
                  onClick={()=>setColor("green")}
                style={{backgroundColor:"green"}}>
                  green</button>
                  <button className='outline-none px-4 py-2 rounded-md text-white'
                  onClick={()=>setColor("brown")}
                style={{backgroundColor:"brown"}}>
                  brown</button>
                  <var>  <button className='outline-none px-4 py-2 rounded-md text-white'
                  onClick={()=>setColor("gray")}
                style={{backgroundColor:"gray"}}>
                  gray</button>
                  <button className='outline-none px-4 py-2 rounded-md  text-white'
                  onClick={()=>setColor("black")}
                style={{backgroundColor:"black"}}>
                  black</button></var>
                  <button className='outline-none px-4 py-2 rounded-md text-white'
                  onClick={()=>setColor("maroon")}
                style={{backgroundColor:"maroon"}}>
                  maroon</button>
        </div>
     </div>
    </div>
</>
  )
}

export default App
