import React from 'react';

import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  state = {
    editing: false,
  };

  handleEditing = (e) => {
    this.setState({ editing: true });
  };

  handleUpdateDone = (event) => {
    if (event.key === 'Enter') this.setState({ editing: false });
  };

  render() {
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    const { id, title, completed } = this.props.todo;

    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => this.props.handleChange(id)}
          />
          <button onClick={() => this.props.deleteTodo(id)}>Delete</button>
          <span style={completed ? completedStyle : null}>{title}</span>
        </div>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            this.props.updateTodoTitle(e.target.value, id);
          }}
          onKeyDown={this.handleUpdateDone}
          className={styles.textInput}
          style={editMode}
        />
      </li>
    );
  }
}

export default TodoItem;
