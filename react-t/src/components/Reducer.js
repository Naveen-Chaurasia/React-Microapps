const initialState = { votes: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'upvote':
      return {votes: state.votes + 1};
    case 'downvote':
      return {votes: state.votes - 1};
    default:
      throw new Error();
  }
}

function VoteCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Current Votes: {state.votes}
      <button onClick={() => dispatch({type: 'upvote'})}>Upvote</button>
      <button onClick={() => dispatch({type: 'downvote'})}>Downvote</button>
    </>
  );
}


// The benefit of useReducer is that it provides a built-in way to perform a number of different state operations with the help of the reducer function, which makes it more dynamic overall than useState.

// You can see the benefit of useReducer versus useState in this vote tracking example. All we have to do to update state is pass the callback function dispatch a string (which is then passed to the reducer) instead of the new state itself.



