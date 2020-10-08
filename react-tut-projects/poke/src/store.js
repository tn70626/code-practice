import Redux from 'redux';

const { createStore } = Redux;

const initState = {
  todos: [],
  posts: [],
};

function myreducer(state = initState, action) {
  if (action.type === 'ADD_TODO') {
    return {
      ...state,
      todos: [...state.todos, action.todos],
    };
  }

  if (action.type === 'ADD_POST') {
    return {
      ...state,
      post: [...state.post, action.post],
    };
  }
}

const store = createStore(myreducer);

store.subscribe(() => {
  console.log('state updated');
  console.log(store.getState());
});

const todoAction = { type: 'ADD_TODO', todo: 'buy milk' };
const postAction = { type: 'ADD_POST', post: 'add post' };

store.dispatch(todoAction);
store.dispatch(postAction);
