import { Outlet } from "react-router";
import { Bounce, ToastContainer } from "react-toastify";

const AuthLayout = () => {
  return (
    <div className="authLayout font-base bg-dark text-secondary flex-center">
      <div className="w-full h-full relative md:w-[80%] lg:w-1/2">
        <Outlet />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </div>
    </div>
  );
};

export default AuthLayout;
