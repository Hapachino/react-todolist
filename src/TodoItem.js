import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoText: this.props.todo.title,
      editing: false,
    }
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  }

  render() {
    const editStyle = this.state.editing ? { display: 'block' } : { display: 'none' };
    const viewStyle = this.state.editing ? { display: 'none' } : { display : 'block' };

    return (
      <div className="collection-item" key={this.props.index}>
        <div style={viewStyle}>
          <span>{this.state.todoText}</span>
          <div style={{ display: 'inline-block', width: '95%' }} className="right-align">
            <button className="btn" onClick={this.handleEditing}>Edit</button>
            {' '}
            <button className="btn" onClick={() => this.props.deleteTodo(this.props.index)}>Delete</button>
          </div>
        </div>
        <input 
          type="text" 
          onChange
          value={this.props.todo.title} 
          style={editStyle} 
        />
      </div>
    );
  }
}

export default TodoItem;
