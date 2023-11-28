import About from '../../component/content/About';
import Hero from '../../component/content/Hero';
import Article from '../../component/content/Article';
import Dokter from '../../component/content/Dokter';

import '../../assets/css/style.css';

function Homepages() {
  return (
    <>
      <Hero />
      <About />
      <Article />
      <Dokter />
    </>
  );
}

export default Homepages;
