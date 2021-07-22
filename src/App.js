import Hello from "./sayHello";
import React, { useState } from "react";
import Tweet1 from "./Tweet";
import hero from "./5.jpg";

function App() {
  // const [isRed, setRed] = useState(false);
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  //   setRed(!isRed);
  // };

  const [users, setUsers] = useState([
    { name: "Kim", message: "Hello there", source: "Tweet from iPhone by" },
    { name: "Kong", message: "Bonjour", source: "Facebook Status by" },
    { name: "Jong", message: "Sayonara", source: "Instagram Post by" },
  ]);

  return (
    <div className="app">
      <div className="tweet-logo">
        <img src={hero} alt="Logo" />
      </div>
      {users.map((user) => (
        <Tweet1 name={user.name} message={user.message} source={user.source} />
      ))}
      {/* <div className="firstItem">
        <button onClick={increment}>Increment</button>
        <h1>{count}</h1>
      </div>

      <div className={!isRed ? "tweet-opp" : "tweet"}>
        <h1>Sayonara</h1>
        <h2>Instagram Post</h2>
        <h2>Kim</h2>
      </div> */}
    </div>
  );
}

export default App;
