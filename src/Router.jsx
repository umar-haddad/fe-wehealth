import { Route, Routes } from 'react-router-dom';
import Homepages from './page/home/Homepages';
import Register from './page/register/Register';
import Login from './page/login/Login';
import LayoutDasboard from "./layouts/dashboard/LayoutDasboard"
import Article from "./page/article/master/Article";
import DetailArticle from "./page/article/detail/DetailArticle";

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepages />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path="/dashboard" element={<LayoutDasboard content={<h1>Hello world</h1>} />} />
      <Route path="/dashboard/article" element={<LayoutDasboard content={<Article />} />} />
      <Route path="/dashboard/article/:article_id" element={<LayoutDasboard content={<DetailArticle />} />} />
    </Routes>
  );
};

export default Router;
