//  Promises + Async/Await Syntax
// Virtually every React application consists of asynchronous code – code that takes an indefinite amount of time to be executed.
// Particularly if you need to get or change data from an external API using browser features like the Fetch API or the third-party library axios.

// Promises are used to resolve asynchronous code to make it resolve like normal, synchronous code, which we can read from top to 
//bottom.

// Promises traditionally use callbacks to resolve our asynchronous code. We use the .then() callback to resolve successfully 
//resolved promises, while we use the .catch() callback to resolve promises that respond with an error.

// Here is a real example of using React to fetch data from my GitHub API using the Fetch API to show my profile image. 
 //data is resolved using promises:


import React from 'react';
 
const App = () => {
  const [avatar, setAvatar] = React.useState('');
 
  React.useEffect(() => {
    /* 
      The first .then() lets us get JSON data from the response.
      The second .then() gets the url to my avatar and puts it in state. 
    */
    fetch('https://api.github.com/users/reedbarger')
      .then(response => response.json())
      .then(data => setAvatar(data.avatar_url))
      .catch(error => console.error("Error fetching data: ", error);
  }, []);
 
  return (
    <img src={avatar} alt="Reed Barger" />
  );
};
 
export default App;


// Instead of always needing to use callbacks to resolve our data from a promise, we can use a cleaned syntax that looks identical to synchronous code, called the async/await syntax.

// The async and await keywords are only used with functions (normal JavaScript functions, not React function components).

// To use them, we need to make sure our asynchronous code is in a function prepended with the keyword async. Any promise's value can 
//then be resolved by placing the keyword await before it.

