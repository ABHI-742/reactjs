import React, { Component } from 'react'

class mess extends Component 
{
    constructor(props) {
      super(props)
    
      this.state = {
         message:" you are a bad boy"
      }
    }
    onclickvalue()
    {
        this.setState({
            message:"you are a good boy"
        })
    }
  render() {
    return (
      <div>
        <div> Message you are - {this.state.message}</div>
        <button onClick={() => this.onclickvalue()}>click here to change statement</button>
      </div>
    )
  }
}

export default mess