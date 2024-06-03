import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  const myobj={
    name:"Gautam",
    age:21,
    state:"Delhi"
  }

  const newArry=[1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-white rounded-xl mb-4'>Tailwind Test</h1>
      
      <Card channelName="chai aur code" btnText="click me"/>
      <Card channelName="Learn Code Online" btnText="Show me"/>

    

    </>
  )
}

export default App
