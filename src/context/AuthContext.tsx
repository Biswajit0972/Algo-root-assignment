import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";

import { Action } from "../types/td";
import { signUpType } from "../zod";
type Helper = {
  status: boolean;
  message: string;
};

type State = {
  isAuth: boolean;
  isUser: signUpType | "NAN";
  isSuccess: Helper;
  isFailed: Helper;
  dispatch: Dispatch<Action>;
};

const initialValue: State = {
  isAuth: JSON.parse(localStorage.getItem("isAuth") || "false"),
  isUser: JSON.parse(localStorage.getItem("isUser") || "NAN"),
  isSuccess: { status: false, message: "" },
  isFailed: { status: false, message: "" },
  dispatch: () => {},
};

const AlgooContext = createContext<State>(initialValue);

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "Login": {
      if (state.isUser === "NAN") {
        return {
          ...state,
          isAuth: false,
          isSuccess: { status: false, message: "" },
          isFailed: { status: true, message: "register" },
        };
      }

      const { email, password } = action.payload;
      
      if (email === state.isUser.email && password === state.isUser.password) {
        localStorage.setItem("isAuth", "true");
        return {
          ...state,
          isAuth: true,
          isSuccess: { status: true, message: "user login successfully!" },
          isFailed: { status: false, message: "" },
        };
      }

      return {
        ...state,
        isAuth: false,
        isSuccess: { status: false, message: "" },
        isFailed: { status: true, message: "user credential failed!" },
      };
    }
    case "Logout": {
      return state;
    }
    case "Signup": {
      if (state.isUser === "NAN") {
        localStorage.setItem("isUser", JSON.stringify(action.payload));
        return {
          ...state,
          isUser: action.payload,
          isSuccess: {
            status: true,
            message: "New user created! login to continue",
          },
        };
      } else {
        const { email } = action.payload;
        if (email === state.isUser?.email) {
          return {
            ...state,
            isSuccess: { status: false, message: "" },
            isFailed: { status: true, message: "user Exsist please login" },
          };
        }
      }
      return state;
    }
    default:
      return state;
  }
}

export const AuthContext = ({ children }: { children: ReactNode }) => {
  const [{ isAuth, isUser, isFailed, isSuccess }, dispatch] = useReducer(
    reducer,
    initialValue
  );
 
  return (
    <AlgooContext.Provider
      value={{ isAuth, isUser, dispatch, isFailed, isSuccess }}
    >
      {children}
    </AlgooContext.Provider>
  );
};

export const useAlgoContext = () => {
  const value = useContext(AlgooContext);
  if (!value) {
    console.log("Please add context hook inside Algoo context");
    alert("ok");
  }

  return value;
};
