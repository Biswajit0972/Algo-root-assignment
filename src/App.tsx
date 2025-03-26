import { BrowserRouter, Routes, Route } from "react-router";
import { AuthLayout, Dashboard, Details, Home, Signin, Signup } from "./utils";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Route>

        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="details" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
