import React from 'react'
import { useState } from 'react'
function Form2() {
    const [name,setName]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`the name you entered was ${name}`)

    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label >Enter name:
            <input
             type="text" 
             value={name}
             onChange={(e)=>setName(e.target.value)}
             />
        </label>
      </form>
      
      <p style={{color:"red"}}>your name is: {name}</p>
    </div>
  )
}

export default Form2
