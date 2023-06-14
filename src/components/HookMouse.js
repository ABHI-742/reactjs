import React, { useEffect, useState } from 'react'

function HookMouse() 
{
    const[x,setX]=useState(0)
    const[y,setY]=useState(0)

    const logmouse = e=>{
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('UseEffect Called')
        window.addEventListener('mousemove',logmouse)
    

    },[])
  return (
    <div>
        x-{x} y-{y}
    </div>
  )
}

export default HookMouse