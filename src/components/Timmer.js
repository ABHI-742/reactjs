import React, { useEffect, useState } from 'react'

function Timmer() 
{
    const[count,setCount]=useState(0)

    const tick=() =>{
       setCount(count+1)
    }

    useEffect(() => {
        const inter=setInterval(tick,1000)
        return ()=>{
            clearInterval(inter)
    }  
},[count])     
  return (
    <div>Timmer - {count}</div>
  )
}

export default Timmer