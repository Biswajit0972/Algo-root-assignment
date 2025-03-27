import { BrowserRouter, Routes, Route } from "react-router";
import { AuthLayout, Dashboard, Details, Home, Signin, Signup } from "./utils";
import Protected from "./components/Protected";
import { Bounce, ToastContainer } from "react-toastify";
import Restrict from "./components/Restrict";

const App = () => {
  return (
    <>
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Restrict>
              <AuthLayout />
            </Restrict>
          }>
            <Route index element={<Signin />} />
            <Route path="signup" element={<Signup />} />
          </Route>

          <Route
            path="/dashboard"
            element={
              <Protected>
                <Dashboard />
              </Protected>
            }
          >
            <Route index element={<Home />} />
            <Route path="details" element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
