import React, { PureComponent } from 'react'

class Purecomp extends PureComponent {
  render() {
    console.log("this is pure component render")
    return (
      <div>
        Purecomp {this.props.name}
      </div>
    )
  }
}

export default Purecomp