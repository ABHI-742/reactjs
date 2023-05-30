import React from 'react'

const list = () => 
{
    const names=["abhi","avishekh","anvesh","sushanth","dharmika","pavan","kiran"]
    const namelist=names.map(name =><h1>{name} is fine.</h1>)
    return (
    <div>
     {namelist}
    </div>
  )
}

export default list