import { useNavigate } from "react-router";
import { useAlgoContext } from "../hooks/UseAlgo";
import Button from "./Button";

const Dropdown = () => {
  const {dispatch, state:{isUser}} =  useAlgoContext();
  const navigate = useNavigate()
  function handelDelete() {}

  function handelLogOut() {
    dispatch({type:  "Logout"});
    dispatch({type: "ToggleDropdown"});
    navigate("/")
  }

  return (
    <div className="dropdown">
      <ul className="relative h-full w-full  flex-col gap-1">
        <li className="w-full  text-center font-base text-xl font bold text-secondary">
          <h1>{isUser?.name.charAt(0)}</h1>
        </li>
        <li className="h-14 w-full  flex-center overflow-hidden">
          <Button
            variant="style"
            className="w-full text-lg font-bold"
            onClick={handelLogOut}
          >
            Log out
          </Button>
        </li>
        <li className="h-14 w-full">
          <Button
            variant="danger"
            className="w-full text-lg font-bold"
            onClick={handelDelete}
          >
            Delete Account
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
