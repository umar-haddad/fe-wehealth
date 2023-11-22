import { Route, Routes } from "react-router-dom";
import Register from "./page/register/Register";
import Login from "./page/login/Login";

const Router = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
