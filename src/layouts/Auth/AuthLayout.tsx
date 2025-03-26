import { Outlet } from "react-router"


const AuthLayout = () => {
  return (
    <div className="authLayout font-base bg-dark text-secondary">
        <div className="w-full relative overflow-hidden">
            <div className="w-full relative overflow-hidden max-h-[12rem]  mt-[30%] text-left">
                <h1 className="text-super">Welcome</h1>
                <h1 className="text-super">Back</h1>
                <h3 className="text-max text-gray-600">Sign in to continue</h3>
            </div>
            <div className="w-full relative overflow-hidden mt-12">
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default AuthLayout