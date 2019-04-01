import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';


const style_checked = {
  textDecoration: "line-through"
};
const style_unchecked = {
  textDecoration: "none"
};

class TodoItem extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isCompleted: false,
      isEditable:false
      
    };
  } 
  componentDidMount () {
    
    this.setState({ changed_text: this.props.data.desc });
  }

  handleCheckbox = event => {
    if (event.target.checked) {
      this.setState({
        isCompleted: true
      });
      this.props.handleCompleted(this.props.data.id, true);
    } else {
      this.setState({
        isCompleted: false
      });
      this.props.handleCompleted(this.props.data.id, false);
    }
  };

  handleEdit = event => {
      let _changed_text=event.target.value;
    this.setState({
      isEditable: true,
      changed_text:_changed_text
    });
  };

  render() {
    return (
      <div className={this.props.className}>
      
        <input onChange={this.handleCheckbox}  type="checkbox" />
        {this.state.isEditable ? (
          <input
            type="text"
            onChange={this.handleEdit}
            value={this.state.changed_text}
          />
        ) : (
          <h3 style={this.state.isCompleted ? style_checked : style_unchecked}>
            {this.props.data.desc}
          </h3>
        )}

        <FontAwesomeIcon icon="trash" className="trash_icon" onClick={() => this.props.handleDelete(this.props.data.id)}/>
          
        <FontAwesomeIcon icon="edit" className="edit_icon" onClick={event => this.handleEdit(event)} />
      </div>
    );
  }
}



const TodoItemStyled=styled(TodoItem)`
display:flex;
justify-content:space-around;
align-items:center;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
margin-top:15px;

.trash_icon{
    color:red;
}
.edit_icon{
    color:blue;
}


`

export default TodoItemStyled;


