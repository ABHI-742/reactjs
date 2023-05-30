import React, { Component } from 'react'

class functionss extends Component 
{
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }
  onclickval()
  {
    this.setState({
        count:this.state.count+1
    })
     console.log(this.state.count)
  }
  render() {
    return (
      <div>
        <div>countvalue-{this.state.count}</div>
        <button onClick={() => this.onclickval()}>click to increase count</button>
      </div>
    )
  }
}

export default functionss