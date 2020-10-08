import React, { Component } from 'react';
// import './App.css';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      { name: 'ryu', age: 30, belt: 'black', id: 1 },
      { name: 'yoshi', age: 25, belt: 'green', id: 2 },
      { name: 'ken', age: 29, belt: 'black', id: 3 },
    ],
  };

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({ ninjas });
  };

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter((ninja) => {
      return ninja.id !== id;
    });

    this.setState({
      ninjas: ninjas,
    });
  };

  componentDidMount() {
    console.log('component mounted');
  }

  componentDidUpdate(prevProps, preState) {
    console.log('component updated', prevProps, preState);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My first React app</h1>
        </header>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
