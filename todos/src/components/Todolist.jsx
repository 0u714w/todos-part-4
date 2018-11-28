import React, { Component } from 'react';
import ToDoItem from './Todoitem.jsx';


class ToDoList extends Component {
    render() {
      return <ul className="todo-list">{this.props.todos.map(todo => (
        <ToDoItem
          title={todo.title}
          completed={todo.completed}
          handleCompletedTodo={this.props.handleCompletedTodo(todo.id)}
          handleDeleteTodo={this.props.handleDeleteTodo(todo.id)}
        />
      ))}</ul>;
    }
  }

  export default ToDoList;