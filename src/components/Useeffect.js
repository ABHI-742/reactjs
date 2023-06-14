import React, { useEffect,useState } from 'react'

function Useeffect() 
{
  const[count,setCount]=useState(0)
 
  useEffect(()=>{
    document.title=`you clicked ${count} times`
  })

  return (
    <div>
        <button onClick={() => setCount(prevCount => prevCount+1)}>clicked {count} times</button>
    </div>
  )
}

export default Useeffect