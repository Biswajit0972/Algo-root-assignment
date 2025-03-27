import { ReactNode } from "react";
import { useAuth } from "../hooks/AuthHook"

const Protected = ({children}: {children: ReactNode}) => {
    useAuth();
  return (
    <>
{children}
    </>
  )
}

export default Protected