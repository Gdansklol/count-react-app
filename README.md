# React Count Web App practice for refactoring

## level -1 
```js
import React, {useState} from "react";


const Count = () => {
    const [count, setCount] = useState(0);

   const handleIncrease = () => {
    setCount(count +1);
   }

   const handleDecrease = () => {
    setCount(count -1);
   }

   const handleReset = () => {
    setCount(0);
   }

    return(
        <>
        <div className="count-container">
        <input
        className="number-input"
        type="number" 
        value={count}
        readOnly
        />

        <button
        className="number-btn"
        onClick={handleIncrease} 
        >
            +
        </button>
           
        <button
        className="number-btn"
        onClick={handleReset} 
        >
            Reset
        </button>

        <button
        className="number-btn"
        onClick={handleDecrease} 
        >
          -
        </button>
        </div>
        </>

        
    )
}

export default Count;
```

- level-2

```js
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
```

> This refactoring makes the code more structured and easy to read.

> It has created separate CSS files for each component and improved the layout and styling for better usability and aesthetics.