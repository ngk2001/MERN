import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleSub = () => {
    setCount(count - 1);
  };

  useEffect(()=>{
    console.log("count is changed")
  },[count])
  return (
    <>
      <div className="container w-60 bg-primary-subtle mt-5 p-3  rounded-3">
        <h2>Count: {count}</h2>
        <button className="btn btn-primary mt-3 w-50" onClick={handleAdd}>
          +
        </button>
        <button className="btn btn-danger mt-3 w-25 ms-3" onClick={handleSub}>
          -
        </button>
      </div>
    </>
  );
}

export default Counter;
