import React from 'react';

function TodoList(props) {
  const list = props.todos.length ? (
    props.todos.map((todo, index) => {
      return (
        <div className="todo" key={index} onClick={() => props.deleteTodo(index)}>
          {todo.title}
        </div>
      );
    })
  ) : (
    <p>No more todos, yay!</p>
  )

  return (
    <div>
      {list}
    </div>
  );
}

export default TodoList;
