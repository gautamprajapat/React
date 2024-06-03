import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  const [counter,setCounter]=useState(10);

  const addValue=()=>{
    if(counter<20){
    setCounter(counter+1)
    }
  }

  const subtractValue=()=>{
   if(counter>0){
    setCounter(counter-1);
   }
  }

  return (
    <>
      <div>
        
     <h1>Counter <span/>Project</h1>
     <h2>Counter value:{counter}</h2>
     <div className="button">
     <button onClick={addValue}>Add value</button>
     
     <button onClick={subtractValue}>Subtract Value</button>
       
     </div>
     <h1>Footer:{counter}</h1>
      </div>
    
    </>
  )
}

export default App
