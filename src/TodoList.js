import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
  const list = props.todos.length ? (
    props.todos.map((todo, index) => {
      return (
        <TodoItem 
          todo={todo} 
          key={index}
          index={index} 
          deleteTodo={props.deleteTodo} >
        </TodoItem>
      );
    })
  ) : (
    <p>No more todos, yay!</p>
  )

  return (
    <div className="collection">
      {list}
    </div>
  );
}

export default TodoList;
