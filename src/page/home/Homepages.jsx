import About from '../../component/content/About';
import Hero from '../../component/content/Hero';
import Article from '../../component/content/Article';
import Konsultasi from '../../component/content/Konsultasi';

import '../../assets/css/style.css';

function Homepages() {
  return (
    <>
      <Hero />
      <About />
      <Article />
      <Konsultasi />
    </>
  );
}

export default Homepages;
