import { Route, Routes } from "react-router-dom";
import Homepages from "./page/home/Homepages";
import Register from "./page/register/Register";
import Login from "./page/login/Login";
import LayoutDasboard from "./layouts/dashboard/LayoutDasboard";
import Article from "./page/article/master/Article";
import DetailArticle from "./page/article/detail/DetailArticle";
import ArticleHomes from "./page/home/ArticleHomes";
import ArticleDetail from "./component/article/ArticleDetail";
import LayoutHome from "./layouts/home/LayoutHome";
import AboutUs from "./page/About/AboutUs";
import Profile from "./page/Profile/Profile";
import DetailLayanan from "./page/detailLayanan/DetailLayanan";
import User from "./page/user/master/User";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutHome content={<Homepages />} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={<LayoutDasboard content={<h1>Hello world</h1>} />}
      />
      <Route
        path="/dashboard/article"
        element={<LayoutDasboard content={<Article />} />}
      />
      <Route
        path="/dashboard/article/:article_id"
        element={<LayoutDasboard content={<DetailArticle />} />}
      />
      <Route
        path="/article"
        element={<LayoutHome content={<ArticleHomes />} />}
      />
      <Route
        path="/article/:article_id"
        element={<LayoutHome content={<ArticleDetail />} />}
      />
      <Route path="/about" element={<LayoutHome content={<AboutUs />} />} />
      <Route path="/profile" element={<Profile />} />
      <Route
        path="/detaillayanan"
        element={<LayoutHome content={<DetailLayanan />} />}
      />
      <Route path='/' element={<LayoutHome content={<Homepages />} />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path="/dashboard" element={<LayoutDasboard content={<h1>Hello world</h1>} />} />
      <Route path="/dashboard/article" element={<LayoutDasboard content={<Article />} />} />
      <Route path="/dashboard/article/:article_id" element={<LayoutDasboard content={<DetailArticle />} />} />
      <Route path="/article" element={<LayoutHome content={<ArticleHomes />} />} />
      <Route path="/article/:article_id" element={<LayoutHome content={<ArticleDetail />} />} />
      <Route path="/dashboard/user" element={<LayoutDasboard content={<User />} />} />
    </Routes>
  );
};

export default Router;
