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