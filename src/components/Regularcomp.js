import React, { Component } from 'react'

class Regularcomp extends Component {
  render() {
    console.log("this is the regular component render")
    return (
      <div>
        Regularcomp {this.props.name}
     </div>
    )
  }
}

export default Regularcomp