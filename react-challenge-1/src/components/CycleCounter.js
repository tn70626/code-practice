import React from 'react';

class CycleCounter extends React.Component {
  state = {
    value: 0,
  };

  handleClick = (e) => {
    let number =
      this.state.value + 1 !== this.props.cycle ? this.state.value + 1 : 0;

    this.setState({
      value: number,
    });
  };
  render() {
    return (
      <button
        data-testid="cycle-counter"
        style={{ fontSize: '1rem', width: 120, height: 30 }}
        onClick={this.handleClick}
      >
        {this.state.value}
      </button>
    );
  }
}

export default CycleCounter;
