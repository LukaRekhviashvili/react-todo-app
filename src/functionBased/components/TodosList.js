import React from 'react';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChange={props.handleChange}
          deleteTodo={props.deleteTodo}
          updateTodoTitle={props.updateTodoTitle}
        />
      ))}
    </ul>
  );
};

export default TodosList;
