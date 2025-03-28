import { ReactNode, useReducer } from "react";
import { ACTION, actualState, AlgoContext, STATE } from "./Context";

function reducer(state: STATE, action: ACTION) {
    switch (action.type) {
        case "ToggleDropdown":
            return { ...state, dropdown: !state.dropdown };
        case "ToogleSidebar":
            return { ...state, sidebar: !state.sidebar };
        case "Login": {
            if (!state.isUser?.email) {
                return {
                    ...state,
                    isAuth: false,
                    isFailed: { status: true, message: "register" }
                };
            }

            if (action.payload.email === state.isUser.email && action.payload.password === state.isUser.password) {
                localStorage.setItem("isAuth", "true");
                return {
                    ...state,
                    isAuth: true,
                    isFailed: { status: false, message: "" },
                    isSuccess: { status: true, message: "User login!" }
                };
            }

            return {
                ...state,
                isAuth: false,
                isFailed: { status: true, message: "invalid credentials" }, // Fixed typo
                isSuccess: { status: false, message: "" }
            };
        }

        case "Logout": {
            localStorage.setItem("isAuth", "false");
            return {
                ...state,
                isAuth: false,
                isFailed: { status: false, message: "" },
                isSuccess: { status: true, message: "User logged out!" } // Added logout message
            };
        }

        case "Signup": {
            if (state.isUser?.email) { // Fixed undefined check
                return {
                    ...state,
                    isFailed: { status: true, message: "User already exists" }, // Fixed typo and better message
                    isSuccess: { status: false, message: "" }
                };
            }

            localStorage.setItem("isUser", JSON.stringify(action.payload));
            return {
                ...state,
                isFailed: { status: false, message: "" }, // Fixed typo
                isSuccess: { status: true, message: "User created!" },
                isUser: action.payload,
            };
        }

        case "Reset": {
            localStorage.clear();
            return actualState; // Correctly resetting to initial state
        }

        default:
            return state;
    }
}


const AlgoProvider = ({ children }: { children: ReactNode }) => {

    const [state, dispatch] = useReducer(reducer, actualState);
    return (
        <AlgoContext.Provider value={{ state, dispatch }}>
            {children}
        </AlgoContext.Provider>
    );
};

export default AlgoProvider;
