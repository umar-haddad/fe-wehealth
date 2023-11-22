import { Route, Routes } from "react-router-dom"
import Contoh from "./page/contoh/Contoh"
import LandingPage from "./page/home/LandingPage"
import LayoutDasboard from "./layouts/dashboard/LayoutDasboard"

const Router = () => {
   return (
      <Routes>
         <Route path="/" element={<Contoh />} />
         <Route path="/home" element={<LandingPage />} />
         <Route path="/dashboard" element={<LayoutDasboard content={<h1>Hello world</h1>} />} />
      </Routes>
   )
}

export default Router