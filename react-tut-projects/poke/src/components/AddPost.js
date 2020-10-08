import React, { Component } from 'react';
import AddPostForm from './AddPostForm';

class AddPost extends Component {
  redirect = () => {
    this.props.history.push('/');
  };
  render(props) {
    return (
      <div className="container">
        <h4 className="center">This is a page to add posts</h4>
        <h5>Add a new post</h5>
        <AddPostForm redirect={this.redirect} />
      </div>
    );
  }
}

export default AddPost;
