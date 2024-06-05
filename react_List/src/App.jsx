import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Garage from './components/Garage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Garage/>
    </>
  )
}

export default App
