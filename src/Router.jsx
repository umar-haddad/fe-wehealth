import { Route, Routes } from 'react-router-dom';
import Homepages from './page/home/Homepages';
import Register from './page/register/Register';
import Login from './page/login/Login';
import LayoutDasboard from "./layouts/dashboard/LayoutDasboard"
import Article from "./page/article/master/Article";
import DetailArticle from "./page/article/detail/DetailArticle";
import ArticleHomes from "./page/home/ArticleHomes";
import ArticleDetail from "./component/article/ArticleDetail";
import LayoutHome from "./layouts/home/LayoutHome";

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<LayoutHome content={<Homepages />} />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path="/dashboard" element={<LayoutDasboard content={<h1>Hello world</h1>} />} />
      <Route path="/dashboard/article" element={<LayoutDasboard content={<Article />} />} />
      <Route path="/dashboard/article/:article_id" element={<LayoutDasboard content={<DetailArticle />} />} />
      <Route path="/article" element={<LayoutHome content={<ArticleHomes />} />} />
      <Route path="/article/:article_id" element={<LayoutHome content={<ArticleDetail />} />} />
    </Routes>
  );
};

export default Router;
