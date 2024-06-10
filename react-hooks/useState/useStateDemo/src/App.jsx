import { useState } from 'react'
import './App.css';


function App() {
  const defaultColor="gray";
  const [color, setColor] = useState(defaultColor)

  const toggleColor=(newColor)=>{
    setColor((prevColor)=>(prevColor===defaultColor?newColor:defaultColor))
  }


  return (
    <div className='full-width-div'
    style={{backgroundColor:color}}>
    
    <div className="color-bar">
        <ul>
          <li><button
          onClick={()=>toggleColor("red")}
          style={{backgroundColor:"red"}}>
          
          Red</button></li>
          <li><button
           onClick={()=>toggleColor("Yellow")}
           style={{backgroundColor:"yellow",
            color:'white'
           }}>
          
          Yellow</button></li>
          <li><button
            onClick={()=>toggleColor("Black")}
            style={{backgroundColor:"Black",
              color:'white'}}
          >Black</button></li>
          <li><button
            onClick={()=>toggleColor("Orange")}
            style={{backgroundColor:"Orange",
              color:'white'}}
          >Orange</button></li>
          <li><button
            onClick={()=>toggleColor("Green")}
            style={{backgroundColor:"Green",
            color:'white'}}
          >Green</button></li>
        </ul>
      </div>
     
      </div>
  )
}

export default App
