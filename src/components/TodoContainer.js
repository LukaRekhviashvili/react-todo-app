import React from 'react';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';
import { v4 as uuidv4 } from 'uuid';

class TodoContainer extends React.Component {
  state = {
    todos: [],
  };

  handleChange = (id) => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    });
  };

  deleteTodo = (id) => {
    this.setState((prevState) => {
      return {
        todos: [...prevState.todos.filter((todo) => todo.id !== id)],
      };
    });
  };

  addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  updateTodoTitle = (updatedTitle, id) => {
    this.setState((prevState) => {
      return {
        todos: [
          ...prevState.todos.map((todo) => {
            if (todo.id === id) return { ...todo, title: updatedTitle };
            return todo;
          }),
        ],
      };
    });
  };

  componentDidMount() {
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos);
      console.log('update');
      localStorage.setItem('todos', temp);
      console.log(localStorage.getItem('todos'));
    }
  }

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoItem={this.addTodoItem} />
          <TodosList
            todos={this.state.todos}
            handleChange={this.handleChange}
            deleteTodo={this.deleteTodo}
            updateTodoTitle={this.updateTodoTitle}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
