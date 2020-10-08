import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
// import Todos from "./components/Todos";
// import Header from "./components/layout/Header";
// import AddTodo from "./components/AddTodo";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

class App extends Component {
  state = {
    todos: [],
  };

  // Toggle Complete
  markComplete = (id) => {
    console.log(id);
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  // delete todo
  delTodo = (id) => {
    // this.setState({
    //   todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    // });
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        });
      });
  };

  addTodo = (title) => {
    // const newTodo = {
    //   id: this.state.todos.length + 1,
    //   title,
    //   completed: false,
    // };
    // this.setState({ todos: [...this.state.todos, newTodo] });
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        id: this.state.todos.length + 1,
        title,
        completed: false,
      })
      .then((res) => this.setState({ todos: [...this.state.todos, res.data] }));
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => this.setState({ todos: res.data }));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact
            path="/"
            render={(props) => (
              <Home
                todos={this.state.todos}
                markComplete={this.markComplete}
                delTodo={this.delTodo}
                addTodo={this.addTodo}
              />
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
