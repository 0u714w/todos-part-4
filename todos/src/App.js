import React, { Component } from "react";
import "./App.css";
import todolist from "./todos.json";
import ToDoList from "./components/Todolist.jsx";
import { withRouter, Link, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';



class App extends Component {
  state = { todos: todolist };

  handleDeleteCompletedTodos = event => {
    const newTodos = this.state.todos.filter(todo => {
      if (todo.completed === true) {
        return false;
      }
      return true;
    });
    this.setState({
      todos: newTodos
    });
  };

  handleDeleteTodo = todoIdThatWasClicked => event => {
    const newTodos = this.state.todos.filter(todo => {
      if (todo.id === todoIdThatWasClicked) {
        return false;
      }
      return true;
    });
    this.setState({
      todos: newTodos
    });
  };

  handleCompletedTodo = idUserClicked => event => {
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === idUserClicked) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({
      todos: newTodos
    });
  };

  addNewTodo = event => {
    const newTodos = this.state.todos.slice(0);
    if (event.keyCode === 13) {
      const newTodo = {
        userId: 1,
        id: Math.floor(Math.random() * 1000) + 1,
        title: event.target.value,
        completed: false
      };
      newTodos.push(newTodo);
      this.setState({
        todos: newTodos
      });
      event.target.value = "";
    }
  };

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            onKeyDown={this.addNewTodo}
          />
        </header>
        <section className="main">
        <Switch>
          <Route path="/"
          exact
          render={(props) => <ToDoList 
            todos={this.state.todos}
            handleCompletedTodo={this.handleCompletedTodo}
            handleDeleteTodo={this.handleDeleteTodo}>
              
            </ToDoList> }/>

            <Route path="/active"
          render={(props) => <ToDoList 
            todos={this.state.todos.filter(todo => !todo.completed)}
            handleCompletedTodo={this.handleCompletedTodo}
            handleDeleteTodo={this.handleDeleteTodo}>
              
            </ToDoList> }/>

            <Route path="/completed"
          render={(props) => <ToDoList 
            todos={this.state.todos.filter(todo => todo.completed)}
            handleCompletedTodo={this.handleCompletedTodo}
            handleDeleteTodo={this.handleDeleteTodo}>
              
            </ToDoList> }/>
          

            </Switch>
        </section>
        <footer className="footer">
          <span className="todo-count">
            <strong>0</strong> item(s) left
          </span>
          <ul className="filters">
            <li>
              <Link to="/"> All</Link>
            </li>
            <li>
              <Link to="/active"> Active</Link>
            </li>
            <li>
              <Link to="/completed"> Completed</Link>
            </li>
          </ul>
          <button
            className="clear-completed"
            onClick={this.handleDeleteCompletedTodos}
          >
            Clear Completed
          </button>
        </footer>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = state => {
  return {
    todos: state.todos
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
