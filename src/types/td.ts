import { Dispatch } from "react";
import { loginType, signUpType } from "../zod";

export type Action = {type: "Login", payload: loginType} | {type:  "Logout"} | {type: "Signup", payload: signUpType};

export interface State {
    isAuthenticate:  boolean,
    isUserCreated:  signUpType,
    dispatch: Dispatch<Action>,
}

