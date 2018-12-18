import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoText: this.props.todo.title,
      completed: false,
      editing: false,
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(!prevState.editing && this.state.editing){
      this.input.focus();
    }
  }

  handleEditingStart = (e) => {
    this.setState({
      editing: true,
    });
  }

  handleEditingCompleteOnEnter = (e) => {
    if (e.key === 'Enter') {
      this.setState({
        editing: false,
      });
    }
  }

  handleEditingCompleteOnBlur = (e) => {
    this.setState({
      editing: false,
    });
  }

  handleEditing = (e) => {
    this.setState({
      todoText: e.target.value,
    });
  }

  completeTodo = () => {
    this.setState({
      completed: !this.state.completed,
    });
  }

  render() {
    const editStyle = this.state.editing ? { display: 'block' } : { display: 'none' };
    const viewStyle = this.state.editing ? { display: 'none' } : { display : 'block' };
    const lineThrough = this.state.completed ? { textDecoration: 'line-through' } : '';

    return (
      <div className="collection-item" key={this.props.index}>
        <div style={viewStyle}>
          <span 
            style={{ display: 'inline-block', width: '70%', ...lineThrough }} 
            onDoubleClick={this.handleEditingStart}>
            {this.state.todoText}
          </span>
          <div 
            style={{ display: 'inline-block', width: '30%' }} 
            className="right-align">
            <button
              className="btn" 
              onClick={() => this.completeTodo()}>
              Complete
            </button>
            {' '}
            <button 
              className="btn" 
              onClick={() => this.props.deleteTodo(this.props.index)}>
              Delete
            </button>
          </div>
        </div>
        <input 
          type="text" 
          onKeyDown={this.handleEditingCompleteOnEnter}
          onBlur={this.handleEditingCompleteOnBlur}
          onChange={this.handleEditing}
          value={this.state.todoText} 
          style={editStyle} 
          ref={element => this.input = element}
        />
      </div>
    );
  }
}

export default TodoItem;
