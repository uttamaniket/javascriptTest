import React, { Component } from 'react';
import Todos from './Todos';
import Addtodo from './Addtodo';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'buy some milk'},
      { id: 2, content: 'play mario kart'}
    ]
  }
  deleteTodo = (id) => {
    // console.log(id);
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    }) 
  }
  AaddTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
       <h1 className="center blue-text"> Todo's</h1>
       <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
       <Addtodo AaddTodo={this.AaddTodo} />
      </div>
    );
  }
}

export default App;
