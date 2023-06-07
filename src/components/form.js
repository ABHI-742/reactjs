import React, { Component } from 'react'

class form extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          username:'',
          comment:'',
          topic:''
       }
     }
     handler=(event)=>
     {
          this.setState({
            username:event.target.value
          })
     } 
     chandler= (event)=>
     {
        this.setState({
            comment:event.target.value
        })
     }
     thandler = (event)=>
     {
        this.setState({
            topic:event.target.value
        })
     }

     shandler=(event)=>
     {
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
     }
  render() {
    return (
      <form onSubmit={this.shandler}>
        <div>
         <lable>UserName</lable>
         <input type="text" 
         value={this.state.username}
         onChange={this.handler}/>
        </div>
        <div>
            <lable>comments</lable>
            <input type="textarea"
            value={this.state.comment}
            onChange={this.chandler}/>
        </div>
        <div>
           <label>Topics</label>
           <select value={this.state.topic} onChange={this.thandler}>
            <option value="react">React</option>
            <option value="javascript">JavaScript</option>
            <option value="html">Html</option>
           </select>
           <button type="submit">submit</button>
        </div>
      </form>
    )
  }
}

export default form