import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
export const context = createContext();

export const ContextProvider = ({ children }) => {
  const initialState = {
    isLogged: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
  );
};
