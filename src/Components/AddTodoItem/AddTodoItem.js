import React, { Component } from 'react'

export class AddTodoItem extends Component {
    constructor(props){
        super(props);
        this.state={
            text:""
        }
    }

  handleChange=(event)=>{
    
    

      this.setState({
          text:event.target.value
      });
      

      
 
  }

  render() {
    return (
 
          <form onSubmit={(event)=>this.props.handleSubmit(event,this.state.text)}>
             
              <input placeholder="Enter the task" onChange={this.handleChange} value={this.state.text} type="text" />
             

          </form>
        
 
    )
  }
}

export default AddTodoItem
