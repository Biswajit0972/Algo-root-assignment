import { useContext } from "react"
import { AlgoContext } from "../context/Context"

export const useAlgoContext = () => {
    const value = useContext(AlgoContext);
    if (!value) throw new Error("Please use algo hook inside the Algo provider");

    return value;
}