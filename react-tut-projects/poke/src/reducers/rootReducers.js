const initState = {
  posts: [
    { id: '1', title: 'post 1', body: 'body content' },
    { id: '2', title: 'post 2', body: 'body content' },
    { id: '3', title: 'post 3', body: 'body content' },
  ],
};

const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter((post) => post.id !== action.id);
    return { ...state, posts: newPosts };
  }

  if (action.type === 'ADD_POST') {
    let newPosts = [...state.posts, action.post];
    return { ...state, posts: newPosts };
  }
  return state;
};

export default rootReducer;
