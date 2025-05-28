import React, { useDeferredValue, useState, useTransition } from "react";

export default function Example7() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const defferefValue = useDeferredValue(input);

  const handleClick = () => {
    startTransition(async () => {
      await new Promise((res) => setTimeout(() => res(), 2000));
    });
  };

  const handleOnChange = (e) => {
    const value = e.target?.value;
    setInput(value);
  };
  console.log("defered", defferefValue);
  return (
    <div>
      <h1>Use of useTransition hook</h1>
      {isPending ? <p>Loading...</p> : null}
      <button disabled={isPending} onClick={handleClick}>
        Submit
      </button>
      <input value={input} onChange={handleOnChange} />

      <p>{defferefValue}</p>
    </div>
  );
}
