import React, { useEffect, useRef } from "react";
export default function Example3() {
  const userRef = useRef();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleOnChange = (event) => {
    userRef.current.value = event.target.value;
  };
  console.log("render");
  return (
    <div>
      <input ref={userRef} onChange={handleOnChange} />
    </div>
  );
}
