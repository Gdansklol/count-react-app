import React, { useState } from "react";
import "./Count.css";

const Count = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrease = () => {
    setCount(prevCount => prevCount - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="count-container">
      <input
        type="text"
        value={count}
        readOnly
        className="number-input"
      />

      <div className="button-container">
        <button className="number-btn" onClick={handleIncrease}>+</button>
        <button className="number-btn" onClick={handleReset}>Reset</button>
        <button className="number-btn" onClick={handleDecrease}>-</button>
      </div>
    </div>
  );
};


export default Count;
