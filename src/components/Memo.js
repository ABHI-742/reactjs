import React from 'react'

function Memo({name}) 
{
    console.log("Rendering method of Memo")
  return (
    <div>{name}</div>
  )
}

export default React.memo(Memo)