import React, { Component } from 'react';
// import { render } from '@testing-library/react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
  // state = {
  //   posts: [],
  // };
  // componentDidMount() {
  //   axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
  //     // console.log(res.data);
  //     this.setState({
  //       posts: res.data.slice(0, 10),
  //     });
  //   });
  // }
  render() {
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title">{post.title}</span>
                <p>{post.body}</p>
              </Link>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">no posts here</div>
    );

    return (
      <div className="container">
        <h4 className="center">this is the homepage</h4>
        {postList}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(Home);
