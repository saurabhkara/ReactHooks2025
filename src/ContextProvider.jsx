import { createContext, useReducer } from "react";

const ProjectContext = createContext();

const intialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return {
        count: state.count + 1,
      };
    case "Decrease":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <ProjectContext.Provider value={{ state, dispatch }}>
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectContext };
export default ContextProvider;
