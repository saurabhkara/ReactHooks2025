import React, { useId } from "react";

export default function Example6() {
  const uid = useId();
  return (
    <div>
      <input id={uid} type="checkbox" />
      <label htmlFor={uid}>Accept the condition</label>
    </div>
  );
}
