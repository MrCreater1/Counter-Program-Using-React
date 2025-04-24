import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  function Inc() {
    setCount(count + 1);
  }
  function Reset() {
    setCount(0);
  }
  function Dec() {
    setCount(count - 1);
  }

  return (<>
  <h1 className="Heading">Counter</h1>
    <div className="counter-container">
      <p className="counterDisplay">{count}</p>
      <div className="buttons">
      <button className="button1" onClick={Dec}>
        Decrement
      </button>
      <button className="button2" onClick={Reset}>
        Reset
      </button>
      <button className="button3" onClick={Inc}>
        Increment
      </button>
      </div>
    </div>
    </>
  );
}
export default Counter;
