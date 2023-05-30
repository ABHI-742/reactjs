import React from 'react'

const funmet = () => {
    function onclick()
    {
        console.log("you clicked the button")
    }
  return (
    <div>
        <button onClick={onclick}>button fun</button>
    </div>
  )
}

export default funmet