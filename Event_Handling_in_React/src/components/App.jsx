import React, { useState } from "react";

function App() {
  const [heading, setHeading] = useState("Hej");
  const [over, setOver] = useState(false);
  function headingHandler() {
    setHeading("submitted");
  }

  function overhandling() {
    setOver(true);
  }
  function outHnadling() {
    setOver(false);
  }
  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: over ? "black" : "white" }}
        onClick={headingHandler}
        onMouseOver={overhandling}
        onMouseOut={outHnadling}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
