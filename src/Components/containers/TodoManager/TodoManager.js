import React, { Component } from "react";
import TodoItemStyled from "../../TodoItem/TodoItem";
import AddTodoItem from '../../AddTodoItem/AddTodoItem';
import styled from 'styled-components';

class TodoManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{ id: 0, desc: "task to complete", isCompleted: false }]
      
    };
  }

  handleSubmit=(event,item)=>{
      event.preventDefault();
      let newItems=[...this.state.items];
      let newItem={
          id:this.state.items.length,
          desc:item,
          isCompleted:false
      }
      newItems.push(newItem);
      this.setState({
        items:newItems
      })

  }

  handleDelete=(index)=>{
      let newItems=[...this.state.items]
      console.log(index);

      newItems= newItems.filter((item)=>{
         if(item.id !== index){
            
             return item;
         }
         
      })
      console.log(newItems);
      this.setState({
          items:newItems
      })

  }

  handleEditDone=(desc,id)=>{
    
    console.log("handle edit called")
    let newItems=[...this.state.items];
    newItems.every((element,index)=>{
      if(element.id===id){
        element.desc=desc;
        return false
      }
      else{
        return true;
      }
    })
  
    
    this.setState({
      items:newItems
    })
  
  }
  handleCompleted=(index,status)=>{
      
    let newItems=[...this.state.items];
    newItems.every((element)=>{
      if(element.id===index){
        element.isCompleted=status;
        return false
      }
      else{
        return true;
      }
    })
    
    this.setState({
        items:newItems
    })


}
  render() {
    return (
      <div className={this.props.className}>
      <AddTodoItem  handleSubmit={this.handleSubmit}/>
        {this.state.items.map((item) => {
          return <TodoItemStyled data={item} handleEditDone={this.handleEditDone} handleDelete={this.handleDelete} handleCompleted={this.handleCompleted}  key={item.id}/>;
        })}

        

      

     
      </div>


    );
  }
}


const TodoManagerStyled=styled(TodoManager)`
max-width:50%;
margin:20px auto;

`
export default TodoManagerStyled;

