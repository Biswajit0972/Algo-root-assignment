import { ReactNode } from "react";
import { Navigate } from "react-router";
import { useAlgoContext } from "../hooks/UseAlgo";

const Protected = ({ children }: { children: ReactNode }) => {
  const {state:{isAuth}} = useAlgoContext();
  return isAuth ? children : <Navigate to="/"/>;
};

export default Protected;
