import { globalStateInterface } from "../types/State";
import { showNotification, updateNotification } from "@mantine/notifications";
import { MantineNumberSize } from "@mantine/core";

export type ACTIONS =
  | {
      type: "change loading state";
      payload: boolean;
    }
  | {
      type: "login user";
      payload: {
        user: { token: string; username: string };
      };
    }
  | {
      type: "set session token";
      payload: string;
    }
  | {
      type: "logout user";
    }
  | {
      type: "send notification";
      payload: {
        id: string;
        icon: React.ReactNode;
        color: string;
        title: string;
        radius: MantineNumberSize;
        className: string;
        message: string | undefined;
        loading: boolean;
        disallowClose: boolean;
        autoClose?: boolean | number;
      };
    }
  | {
      type: "update notification";
      payload: {
        id: string;
        icon: React.ReactNode;
        color: string;
        title: string;
        radius: MantineNumberSize;
        className: string;
        message: string | undefined;
        loading: boolean;
        disallowClose: boolean;
        autoClose?: boolean | number;
      };
    };

export const reducer = (
  state: globalStateInterface,
  action: ACTIONS
): globalStateInterface => {
  switch (action.type) {
    case "change loading state":
      return {
        ...state,
        isLoading: action.payload,
      };

    case "set session token":
      sessionStorage.setItem("token", action.payload);
      return {
        ...state,
      };

    case "logout user":
      sessionStorage.clear();
      return {
        ...state,
        isLoggedIn: false,
        isLoading: true,
      };

    case "send notification":
      showNotification(action.payload);
      return {
        ...state,
      };
    case "update notification":
      updateNotification(action.payload);
      return {
        ...state,
      };

    default:
      throw new Error("Reducer error");
  }
};
