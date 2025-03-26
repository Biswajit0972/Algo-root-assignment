import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="authLayout font-base bg-dark text-secondary flex-center">
     <div className="w-full h-full relative md:w-[80%] lg:w-1/2">
     <Outlet />
     </div>
    </div>
  );
};

export default AuthLayout;
