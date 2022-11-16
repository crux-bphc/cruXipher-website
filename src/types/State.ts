import { ACTIONS } from "../context/reducer";

export interface globalStateInterface {
  isLoggedIn: boolean;
  isLoading: boolean;
}

export interface globalContextInterface {
  globalState: globalStateInterface;
  globalDispatch: React.Dispatch<ACTIONS>;
}
