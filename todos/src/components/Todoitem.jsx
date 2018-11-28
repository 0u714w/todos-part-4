import React, { Component } from 'react';



class ToDoItem extends Component {
    render() {
      return (
        <li className={this.props.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              defaultChecked={this.props.completed}
              onClick={this.props.handleCompletedTodo}
            />
            <label>{this.props.title}</label>
            <button className="destroy" onClick={this.props.handleDeleteTodo} />
          </div>
        </li>
      );
    }
  }

  export default ToDoItem;