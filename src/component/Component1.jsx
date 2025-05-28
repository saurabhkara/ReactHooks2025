import React from "react";
import { useFormStatus } from "react-dom";

export default function Component1() {
  const { pending } = useFormStatus();
  return (
    <div>
      <button type="submit">{pending ? "Loading" : "Submit"}</button>
    </div>
  );
}
