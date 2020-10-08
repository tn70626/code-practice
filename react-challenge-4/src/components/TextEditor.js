import React from 'react';

class TextEditor extends React.Component {
  state = {
    input: '',
    value: [],
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value,
    });
  };
  handleAppend = (e) => {
    this.setState({
      input: '',
      value: [...this.state.value, `${this.state.input} `],
    });
  };
  handleUndo = (e) => {
    const { value } = this.state;
    const newValue = value.slice(0, -1);
    this.setState({
      input: '',
      value: newValue,
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="controls">
          <input
            className="word-input"
            type="text"
            data-testid="word-input"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <button
            data-testid="append-button"
            onClick={this.handleAppend}
            disabled={!this.state.input}
          >
            Append
          </button>
          <button
            data-testid="undo-button"
            disabled={!this.state.value.length}
            onClick={this.handleUndo}
          >
            Undo
          </button>
        </div>
        <div className="text-field" data-testid="text-field">
          {this.state.value}
        </div>
      </React.Fragment>
    );
  }
}

export default TextEditor;
