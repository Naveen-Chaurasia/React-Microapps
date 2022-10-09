import React from "react";

function App() {
  const programmers = ["Reed", "John", "Jane"];

  return (
    <ul>
      {/* Returns 'Reed' */}
      {programmers
        .reduce((acc, programmer) => {
          if (!programmer.startsWith("J")) {
            return acc.concat(programmer);
          } else {
            return acc;
          }
        }, [])
        .map((programmer) => (
          <li>{programmer}</li>
        ))}
    </ul>
  );
}

export default App;