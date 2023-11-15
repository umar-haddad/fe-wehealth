import { Route, Routes } from "react-router-dom"
import Contoh from "./page/contoh/Contoh"
import LandingPage from "./page/home/LandingPage"

const Router = () => {
   return (
      <Routes>
         <Route path="/" element={<Contoh />} />
         <Route path="/home" element={<LandingPage />} />
      </Routes>
   )
}

export default Router