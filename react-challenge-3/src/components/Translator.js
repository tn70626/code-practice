import React from 'react';

class Translator extends React.Component {
  state = {
    value: '',
  };
  handleChange = (e) => {
    const targetValue = e.target.value;
    console.log(targetValue);

    const { translations } = this.props;

    for (const [key, value] of translations) {
      // console.log(value);
      if (key === targetValue) {
        console.log(value);
        return this.setState({
          value,
        });
      } else {
        this.setState({
          value: '',
        });
      }
    }

    // this.setState({
    //   value: e.target.value,
    // });
  };

  render() {
    return (
      <React.Fragment>
        <div className="controls">
          <div className="input-container">
            <span>input:</span>
            <input
              type="text"
              className="text-input"
              data-testid="text-input"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-container">
            <span>output:</span>
            <input
              type="text"
              className="text-output"
              data-testid="text-output"
              value={this.state.value}
              readOnly
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Translator;
