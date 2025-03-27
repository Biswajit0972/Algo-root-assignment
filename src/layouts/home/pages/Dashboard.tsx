import { Outlet } from "react-router";
import Navbar from "../../../components/Navbar";
import Mobile from "../../../components/Mobile";
import { useAlgoContext } from "../../../hooks/UseAlgo";
import Dropdown from "../../../components/Dropdown";


const Dashboard = () => {
  const { state: { sidebar, dropdown } } = useAlgoContext();

  return (
    <div className=" h-dvh w-full relative bg-dark grid grid-cols-1 grid-rows-12  md:grid-cols-5 md:grid-rows-12">
      <div className=" col-span-2 bg-red w-full relative overflow-hidden md:col-span-5">
        <Navbar />
      </div>

      <div className=" hidden  md:block relative row-span-12 row-start-2 bg-blue">
        <Mobile />
      </div>
      <div className=" relative col-span-4 row-span-12 row-start-2 ">
        {sidebar && <Mobile />}
        {dropdown && <Dropdown />}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
