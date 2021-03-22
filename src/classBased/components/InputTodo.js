import React, { Component } from 'react';

class InputTodo extends Component {
  state = {
    title: '',
  };

  onChange = (e) => {
    this.setState({ title: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.title.trim()) {
      this.props.addTodoItem(this.state.title);
      this.setState({
        title: '',
      });
    } else alert('Please write item');
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <button className="input-submit">Submit</button>
      </form>
    );
  }
}
export default InputTodo;