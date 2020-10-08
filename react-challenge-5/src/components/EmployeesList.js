import React from 'react';

class EmployeesList extends React.Component {
  handleChange = (e) => {
    this.props.filterEmployee(e.target.value);
  };

  render() {
    const { employees } = this.props;
    return (
      <React.Fragment>
        <div className="controls">
          <input
            type="text"
            className="filter-input"
            data-testid="filter-input"
            onChange={this.handleChange}
          />
        </div>
        <ul className="employees-list">
          {employees.map((employee) => (
            <li key={employee.name} data-testid="employee">
              {employee.name}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default EmployeesList;
