import React, { useState } from "react";

function Tweet1(props) {
  const [isMode, setMode] = useState(false);

  const changeMode = () => {
    setMode(!isMode);
  };
  return (
    <div className="tweety">
      <button classname="button-indi" onClick={changeMode}>
        Switch Mode
      </button>
      <div className={!isMode ? "tweet-opp" : "tweet"}>
        <h1>{props.message}</h1>
        <h2>{props.source}</h2>
        <h2>{props.name}</h2>
      </div>
    </div>
  );
}
export default Tweet1;
