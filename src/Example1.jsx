import React, { useState } from "react";

export default function Example1() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Counter</h1>
      <div>
        <p onClick={increase}>+</p>
        <p>{count}</p>
        <p onClick={decrease}>-</p>
      </div>
    </div>
  );
}
