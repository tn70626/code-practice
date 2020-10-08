import React, { Component } from 'react';
import './App.css';

import EmployeesList from './components/EmployeesList';

class App extends Component {
  state = {
    employees: [],
  };

  filterEmployee = (value) => {
    const employees = this.props.employees.filter((employee) => {
      const { name } = employee;
      const lowercaseValue = value.toLowerCase();
      const lowercaseName = name.toLowerCase();
      if (lowercaseName.indexOf(lowercaseValue) > -1) {
        return employee;
      }
    });

    this.setState({ employees });
  };

  render() {
    return (
      <div className="App">
        <EmployeesList
          employees={this.state.employees}
          filterEmployee={this.filterEmployee}
        />
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      employees: this.props.employees,
    });
  }
}

export default App;
