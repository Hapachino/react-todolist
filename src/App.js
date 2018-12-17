import React, { Component } from 'react';
import TodoList from './TodoList';
import InputBar from './InputBar';

const todos = [
  { title: 'buy milk' },
  { title: 'wash car' },
]

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      todoText: '',
      todos,
    }
  }

  handleTextChange = (e) => {
    this.setState({
      todoText: e.target.value,
    });
  }

  addTodo = (e) => {
    if (e.key === 'Enter') {
      this.setState({
        todos: [...this.state.todos, { title: this.state.todoText }],
        todoText: '',
      });
    }
  }

  deleteTodo = (key) => {
    const todos = this.state.todos.filter((todo, index) => index !== key);
    
    this.setState({
      todos,
    });
  }

  render() {
    return (
      <div>
        <h1>todos</h1>
        <InputBar
          todoText={this.state.todoText}
          handleTextChange={this.handleTextChange}
          addTodo={this.addTodo}
        />
          <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
