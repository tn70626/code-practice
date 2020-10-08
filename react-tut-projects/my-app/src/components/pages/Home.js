import React, { Component } from "react";
import Todos from "../Todos";
import Header from "../layout/Header";
import AddTodo from "../AddTodo";

export class Home extends Component {
  render() {
    return (
      <main>
        <h1>Home page</h1>
        <Header />
        <AddTodo addTodo={this.props.addTodo} />
        <Todos
          todos={this.props.todos}
          markComplete={this.props.markComplete}
          delTodo={this.props.delTodo}
        />
      </main>
    );
  }
}

export default Home;
