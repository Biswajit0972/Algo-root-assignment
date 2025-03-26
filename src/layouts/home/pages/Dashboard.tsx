import { Outlet } from "react-router";
import Dropdown from "../../../components/Dropdown";
import Navbar from "../../../components/Navbar";
import Mobile from "../../../components/Mobile";

const Dashboard = () => {
  return (
    <div className="h-dvh w-full relative bg-dark md:grid md:grid-cols-5 md:grid-rows-12">
      <div className="bg-red w-full relative overflow-hidden md:col-span-5">
        <Navbar />
      </div>
      <div className=" hidden  md:block relative row-span-12 row-start-2 bg-blue">
        <Mobile />
      </div>
      <div className=" relative col-span-4 row-span-12 row-start-2 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
