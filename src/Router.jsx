import { Route, Routes } from "react-router-dom";
import Contoh from "./page/contoh/Contoh";
import LandingPage from "./page/home/LandingPage";
import Login from "./page/login/Login";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Contoh />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
