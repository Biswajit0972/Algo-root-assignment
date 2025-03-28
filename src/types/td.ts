import { Dispatch } from "react";
import { loginType, signUpType } from "../zod";

export type Action = {type: "Login", payload: loginType} | {type:  "Logout"} | {type: "Signup", payload: signUpType} | {type: "mobileNav"} | {type: "popup"};

export interface State {
    isAuthenticate:  boolean,
    isUserCreated:  signUpType,
    dispatch: Dispatch<Action>,
}

export type OPTIONTYPE = {
    value: string | number ,
    lable: string ,
}

export type multiDropDown = {
  id: string | number,
  value: OPTIONTYPE[];
}

export type myOptions = {
    order: number | string,
    type:  "name" | "age" | "isActive" | ""
}

export type User = {
  name: string;
  age: number;
  email: string;
  city: string;
  isActive: boolean;
};