import React, { Component } from 'react'
import Regularcomp from './Regularcomp'
import Purecomp from './Purecomp'
import Memo from './Memo'

class Parentcomp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'abhi'
      }
    }
    componentDidMount()
    {
      setInterval(()=>{
          this.setState({
              name:'abhi'
           })
      },2000)
    }
  render() 
  {
    console.log("*************this is render parent****************************")
    return (
      <div>
        Parentcomp
        {/*<Regularcomp name={this.state.name}></Regularcomp>
        <Purecomp name={this.state.name}></Purecomp>*/}
        <Memo props={this.state.name}/>
      </div>
     
    )
  }
}

export default Parentcomp