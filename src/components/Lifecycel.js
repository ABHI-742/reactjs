import React, { Component } from 'react'
import Lifecycle2 from './Lifecycle2'

class Lifecycel extends Component 
{
    constructor(props) 
    {
      super(props)
      console.log("Lifecycel 1 Constructor")
      this.state = 
      {
         name: 'abhi'
      }
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log("Lifecycel 1 DerivedState")
        return null
    }
    
  render() 
  {
    console.log("Lifecycle render method")
    return (
      <div>
        <div>LifeCycle1</div>
     <Lifecycle2/>
        </div>
      
    )
  }
  componentDidMount()
    {
       console.log("Lifecycle Didmount method")
    }
 
}

export default Lifecycel