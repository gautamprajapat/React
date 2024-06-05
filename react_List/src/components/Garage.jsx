import React from 'react'
import Car from './Car'

function Garage() {

    const cars=["Ford","Ferrari","Swift","Mercedese"]
  return (
    <div>
      <h1>Ho live in my garage?</h1>
      <ul style={{listStyle:"none"}}>
        {cars.map((car,index)=><Car key={index}  brand={car}/>)}
      </ul>
    </div>
  )
}

export default Garage
