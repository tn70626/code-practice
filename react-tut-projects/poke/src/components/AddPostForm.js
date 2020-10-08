import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/postActions.js';

class AddPostForm extends Component {
  // state
  state = {
    title: '',
    body: '',
  };

  // functions
  handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 100) + 4;
    const newPost = {
      title: this.state.title,
      body: this.state.body,
      id: id.toString(),
    };

    this.props.addPost(newPost);
    this.props.redirect();
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.id]: e.target.value,
    });
  };

  // render
  render(props) {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <label htmlFor="title">New Title</label>
          <input id="title" type="text" onChange={this.handleChange} />
        </fieldset>
        <fieldset>
          <label htmlFor="body">New Body</label>
          <input id="body" type="text" onChange={this.handleChange} />
        </fieldset>
        <button>Add Post</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => {
      dispatch(addPost(post));
    },
  };
};

export default connect(null, mapDispatchToProps)(AddPostForm);
