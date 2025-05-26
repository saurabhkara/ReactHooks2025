import { useContext } from "react";
import { ProjectContext } from "./ContextProvider";
export default function EXample4() {
  const { state, dispatch } = useContext(ProjectContext);
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "Decrease" })}>Decrement</button>
    </div>
  );
}
