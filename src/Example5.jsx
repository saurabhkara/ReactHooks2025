import React, { useImperativeHandle, useRef, useState } from "react";

export default function Example5() {
  const fancyRef = useRef();

  return (
    <div>
      <UserInput ref={fancyRef} />
      <button onClick={() => fancyRef.current.focus()}>Focus</button>
      <button onClick={() => fancyRef.current.clear()}>Clear</button>
    </div>
  );
}

const UserInput = ({ ref }) => {
  const [data, setData] = useState();
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.value = "";
    },
  }));
  return (
    <div>
      <input
        value={data}
        onChange={(e) => setData(e.target?.value)}
        ref={inputRef}
      />
    </div>
  );
};
