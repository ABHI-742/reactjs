import React, { Component } from 'react'

class Refs extends Component 
{
    constructor(props) {
      super(props)
    
      this.inputref=React.createRef()
      this.cbval=null
      this.setCbval=(element)=>{
           this.cbval=element
      }
    }
    componentDidMount()
    {
        if(this.cbval)
        this.cbval.focus()
        /*this.inputref.current.focus()
        console.log(this.inputref)*/
    }
    handler=()=>{
        alert(this.inputref.current.value)
    }
  render() 
  {
    return (
      <div>
       {/* <input type="text" ref={this.inputref}></input>*/}
       <input type="text" ref={this.setCbval}></input>
        <button onClick={this.handler}>Click</button>
      </div>
    )
  }
}

export default Refs