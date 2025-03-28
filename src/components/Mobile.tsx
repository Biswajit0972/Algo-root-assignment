import { NavLink, useLocation } from "react-router";
import { useAlgoContext } from "../hooks/UseAlgo";

const links = [
  { id: 1, link: "/dashboard", lable: "Home" },
  { id: 2, link: "/dashboard/details", lable: "Details" },
];

const Mobile = () => {
    const {pathname} = useLocation();
    const {dispatch} = useAlgoContext()
  return (
    <div className="sidebar">
      <ul className="w-full relative flex-col py-5 px-3 gap-3">
        {links.map(({ id, lable, link }) => (
          <li
            key={id}
            className={`h-12  w-full text-center py-2 rounded-md text-xl font-bold ${pathname === link? "bg-org": "bg-red text-secondary"}`}
            onClick={() => {dispatch({type:"ToogleSidebar"})}}
          >
            <NavLink to={link} className="h-full w-full flex-center">
              {lable}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mobile;
