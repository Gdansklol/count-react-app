// import React,{useState} from "react";

// const Count = () => {
//     const [increase, setIncrease] = useState(0);
//     const [decrease, setDecrease] = useState(0);

//     const hadleReset = () => {
          
//     }

//     return(
//         <div>
//             <input 
//             type="number"
//             value={(e)=> e.target.value}
//             increase
//             decrease
//             />

//             <button
//             onClick={()=>(
//               setIncrease  
//             )}
//             > +</button>

//             <button
//             onChange={hadleReset}>
//                 Reset
//             </button>

//             <button
//             onClick={()=>(
//               setDecrease  
//             )}
//             > - </button>
    
//         </div>
//     )
// }

// export default Count;


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