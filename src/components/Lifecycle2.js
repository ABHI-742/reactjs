import React, { Component } from 'react'

class Lifecycle2 extends Component 
{
  constructor(props) {
    super(props);
  
    this.state = {
       name: 'abhi'
    }
    console.log("Lifecycle 2 constructor")
  }
  static getDerivedStateFromProps(props,state)
  {
    console.log("Lifecycle 2 DerivedState method")
    return null
  }
  componentDidMount()
  {
  console.log("Lifecycle 2 ComponentDidMoutn")
  }

  render() {
    return (
      <div>Lifecycle2</div>
    )
  }
}

export default Lifecycle2