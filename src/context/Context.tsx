import { createContext, Dispatch } from "react";
import { loginType, signUpType } from "../zod";

export type ACTION =
  | { type: "Login"; payload: loginType }
  | { type: "Logout" }
  | { type: "Signup"; payload: signUpType }
  | { type: "ToogleSidebar" }
  | { type: "ToggleDropdown" }
  | {type : "Reset"};

interface REMARK {
  status: boolean;
  message: string;
}

export interface STATE {
  isSuccess: REMARK;
  isFailed: REMARK;
  isAuth: boolean;
  isUser: signUpType ;
  sidebar: boolean;
  dropdown: boolean;
}

export type State = {
    state: STATE,
    dispatch: Dispatch<ACTION>
}

export const actualState: STATE = {
  isSuccess: { status: false, message: "" },
  isFailed: { status: false, message: "" },
  sidebar: false,
  dropdown: false,
  isAuth: JSON.parse(localStorage.getItem("isAuth") || "false"),
  isUser: JSON.parse(localStorage.getItem("isUser") || "{}"),
};

const initalValue:State = {
   state: actualState,
   dispatch: () => {}
}

export const AlgoContext = createContext<State>(initalValue);