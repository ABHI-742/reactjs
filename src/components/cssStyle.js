import React from 'react'
import './style.css'

function cssStyle(props) {
  const clval = props.prime ? 'prime' : ' '
  return (
    <div>
    <h1 class='prime'>This is direct example of css styling</h1>
     <h1 className={`${clval} font-xl`}>I love css styling the html code method one</h1>
    </div>
  )
}

export default cssStyle