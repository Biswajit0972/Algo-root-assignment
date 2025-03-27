import { useEffect } from "react";
import { useNavigate } from "react-router";

export const useAuth = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const getValue = JSON.parse(localStorage.getItem("isAuth") || "false");
    console.log(getValue);
    if (!getValue) {
      navigate("/");
    }
    
  }, [navigate]);
};
