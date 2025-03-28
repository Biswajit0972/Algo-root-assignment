import { Navigate } from "react-router";
import { useAlgoContext } from "../hooks/UseAlgo"
import { ReactNode } from "react";

const Restrict = ({ children }: { children: ReactNode }) => {
    const { state: { isAuth } } = useAlgoContext();
    //   console.log(isAuth);
    return isAuth ? <Navigate to="/dashboard" /> : children;
}

export default Restrict;