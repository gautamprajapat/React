import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length ,setLength]=useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const[characterAllowed,setCharacterAllowed]=useState(false)
  const[password,setPassword]=useState("");

  const passRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed){
      str+="123456789";
    }
    if(characterAllowed){
      str+="~#$%^&*-_+={}[]!`"
    }

    for (let i =1; i <=length; i++){

      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char); 
 1     
    }
    setPassword(pass)

  },[length,numberAllowed,characterAllowed,setPassword])

  
  const copyPasswordToClipboard=useCallback(()=>{
    passRef.current?.select();
    // passRef.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(password)
  }
  ,[password])

    useEffect(()=>{
      passwordGenerator()
    },[length,numberAllowed,characterAllowed,passwordGenerator])

  return (
    <>
     
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
     <h1 className='text-white text-center my-3'>Password generator</h1>
     <div className="flex shadow rounded-lg overflow-hidden mb-4 gap-x-1">
          <input type="text" 
          value={password}
          className='outline-none w-full py-1 px-3 rounded-lg'
          placeholder="Password"
          readOnly

          ref={passRef}

          
          />
          <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white shrink-0 hover:bg-violet-600 active:bg-orange-700 px-3 py-0.3 focus:outline-none"
          >Copy

          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
              <div className='flex items-center gap-x-1'>
                <input 
                type='range'
                min={6}
                max={100}
                value={length}
                className='cursor-default'
                onChange={(e)=>{setLength(e.target.value)}}
                
                />
                <label>Length:{length}</label>

              </div>
              <div className='flex items-center gap-x-1' >
                <input type="checkbox" 
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={()=>{setNumberAllowed((prev)=>!prev)}}
                /> 
                <label htmlFor="numberInput">Numbers</label>
              </div>

              <div className='flex items-center gap-x-1' >
                <input type="checkbox" 
                defaultChecked={numberAllowed}
                id="characterInput"
                onChange={()=>{setNumberAllowed((prev)=>!prev)}}
                /> 
                <label htmlFor="characterInput">Characters</label>
              </div>

              
        </div>
     </div>
      
    </>
  )
}

export default App
