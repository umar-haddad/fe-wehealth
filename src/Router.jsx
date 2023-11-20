import { Route, Routes } from 'react-router-dom';
import Homepages from './page/home/Homepages';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepages />} />
    </Routes>
  );
};

export default Router;
