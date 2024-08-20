"use client";

import { useState } from "react";
import { Button } from "./button";

const First = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="  bg-blue-50 mx-auto w-80 rounded mt-40">
        <h1 className="text-center p-5 bg-blue-200 text-2xl">
          Counter: {count}
        </h1>
        <div className="flex justify-center items-center gap-4 py-2">
          <button
            className="bg-gray-200 px-4 py-2"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
          <button
            className="bg-gray-200 px-4 py-2"
            onClick={() => setCount(0)}
          >
            Refresh
          </button>
          <button
            className="bg-gray-200 px-4 py-2"
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
};







// export default First;



// const second = () => {
//   const [count, setCount] = useState (0);

//   return (
//     <>

// <div>
//   <h1>counter: {count}</h1>

//   <button onClick={() => setCount(count + 1)}>increment</button>
//   <button onClick={() => setCount (0)}>refresh</button>
//   <button onClick={() => setCount(count - 1)}>decrement</button>

// </div>

//     </>
//   )
// }

// export default second;