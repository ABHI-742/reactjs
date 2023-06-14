import React, { useState } from 'react'

function Hookcounter() 
{
    const initval = 0
  const[count,setCount]=useState(initval)
  
  const incementfun=() =>{
    for(let i=0;i<5;i++ )
    {
        setCount(preCount => preCount+1)
    }
  }
  return (
    <div>
        {count}
        <button onClick={() => setCount(preCount => preCount+1)} >increment by 1</button>
        <button onClick={() => setCount(preCount => preCount-1)}>decrement by 1</button>
        <button onClick={incementfun}>increment by 5</button>
    </div>
  )
}

export default Hookcounter