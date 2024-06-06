import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'

function App() {
  const [count, setCount] = useState(0)
  const[todos,setTodos]=useState(["todo1","todo2"]);
  const increment=()=>{
    setCount((count)=>count+1)
  }

  const addTodo=()=>{
    setTodos([...todos,"More_todo"]);

  }

  return (
    <>
     <div>
      <Todo todos={todos} />
      Count:{count}
      <br />
      <button
      style={{border:"2px solid red"}}
       onClick={increment}>Click

      </button>

      <br /><br />
      <div>
        <button
         style={{border:"2px solid red"}}
         onClick={addTodo}>
        Add More todo
        </button>
      </div>
     </div>
    </>
  )
}

export default App
