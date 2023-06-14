import React,{useState} from 'react'

function Hookarr() 
{
    const[val,setVal]=useState([])
    const addVal = () => {
        setVal([...val,{
        id: val.length,
    value:Math.floor(Math.random()*10)+1 }])

    }
  return (
    <div>
    <button onClick={addVal}>Add a value</button>
    <ul>
        {val.map( val=>( 
        <li key={val.id}> {val.value} </li>
        ))}
    </ul>
    </div>
  )
}

export default Hookarr