import React from 'react';

function InputBar(props) {
  return (
    <div>
      <input type="text" 
        autoFocus
        value={props.todoText} 
        onChange={props.handleTextChange} 
        onKeyDown={props.addTodo}
      />
    </div>
  );
}

export default InputBar;
