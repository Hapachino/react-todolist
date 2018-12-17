import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoText: this.props.todo.title,
      editing: false,
    }
  }

  handleEditingStart = (e) => {
    this.setState({
      editing: true,
    });
  }

  handleEditingComplete = (e) => {
    if (e.key === 'Enter') {
      this.setState({
        editing: false,
      });
    }
  }

  handleEditing = (e) => {
    this.setState({
      todoText: e.target.value,
    });
    console.log(e.target.value);
  }

  render() {
    const editStyle = this.state.editing ? { display: 'block' } : { display: 'none' };
    const viewStyle = this.state.editing ? { display: 'none' } : { display : 'block' };

    return (
      <div className="collection-item" key={this.props.index}>
        <div style={viewStyle}>
          <span style={{ display: 'inline-block', width: '80%' }}>{this.state.todoText}</span>
          <div style={{ display: 'inline-block', width: '20%' }} className="right-align">
            <button className="btn" onClick={this.handleEditingStart}>Edit</button>
            {' '}
            <button className="btn" onClick={() => this.props.deleteTodo(this.props.index)}>Delete</button>
          </div>
        </div>
        <input 
          type="text" 
          onKeyDown={this.handleEditingComplete}
          onChange={this.handleEditing}
          value={this.state.todoText} 
          style={editStyle} 
        />
      </div>
    );
  }
}

export default TodoItem;
