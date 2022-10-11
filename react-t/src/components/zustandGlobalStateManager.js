import create from 'zustand'

const useStore = create(set => ({
  votes: 0,
  upvote: () => set(state => ({ vote: state.votes + 1 })),
  downvote: () => set(state => ({ vote: state.votes - 1 })),
}))

function VoteCounter() {
  const { votes, upvote, downvote } = useStore();

  return (
    <>
      Current Votes: {votes}
      <button onClick={upvote}>Upvote</button>
      <button onClick={downvote}>Downvote</button>
    </>
  );
}
// Redux is also great, but make sure that you get started using Redux Toolkit.

// The benefit of a library like Zustand is that it is small, makes your entire global state a custom hook, and to read or update state, you just call this hook in your components.

// To use Zustand, run npm install zustand. After that, make a dedicated store file or folder and create your store:

// One large reason I recommend using Zustand over a library like Redux is that it gives you all the functionality you need without the boilerplate and conceptual overhead of actions, reducers, and so on.

// Plus, you don’t need to wrap your components in a Context Provider. Just install and go!

