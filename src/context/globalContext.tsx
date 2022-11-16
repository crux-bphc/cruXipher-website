import React, { useContext, useReducer } from "react";
import { globalContextInterface, globalStateInterface } from "../types/State";
import { reducer } from "./reducer";
const AppContext = React.createContext({});

interface Props {
  children: JSX.Element;
}

export const AppProvider = ({ children }: Props) => {
  let token = sessionStorage.getItem("token");

  const [state, dispatch] = useReducer(reducer, {
    isLoggedIn: token === null ? false : true,
    isLoading: true,
  } as globalStateInterface);

  return (
    <AppContext.Provider
      value={{
        globalState: state,
        globalDispatch: dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = (): globalContextInterface => {
  return useContext(AppContext) as globalContextInterface;
};
