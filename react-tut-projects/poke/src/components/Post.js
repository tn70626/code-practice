import React, { Component } from 'react';
// import axios from 'axios';
import image from '../3.png';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions.js';

class Post extends Component {
  // state = {
  //   id: null,
  //   post: null,
  // };

  // componentDidMount(props) {
  //   // console.log(this.props);
  //   let id = this.props.match.params.post_id;
  //   const postUrl = 'https://jsonplaceholder.typicode.com/posts/' + id;

  //   axios.get(postUrl).then((res) => {
  //     console.log(res);
  //     this.setState({
  //       id,
  //       post: res.data,
  //     });
  //   });
  // }
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
  };

  render(props) {
    console.log(this.props);
    const post = this.props.post ? (
      <div>
        <img src={image} alt="flower" />
        <h4>
          {this.props.post.title}, {this.props.post.id}
        </h4>
        <p>{this.props.post.body}</p>
        <button onClick={this.handleClick}>Delete post</button>
      </div>
    ) : (
      <div>Loading post</div>
    );
    return <div className="container">{post}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.post_id;
  return {
    post: state.posts.find((post) => post.id === id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch(deletePost(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
