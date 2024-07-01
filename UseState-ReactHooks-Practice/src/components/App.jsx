import React, { useState } from "react";

function Comp() {
  const [time, setTime] = useState("Time");

  function newTime() {
    let gawaTime = new Date().toLocaleTimeString();
    setTime(gawaTime);
  }
  setInterval(newTime, 1000);

  return (
    <div>
      <h1>{time}</h1>
      <button onClick={newTime}>increment</button>
    </div>
  );
}

export default Comp;
