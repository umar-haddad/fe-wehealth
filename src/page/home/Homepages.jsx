import Navbars from '../../component/headers/Navbars';
import Footer from '../../component/headers/Footer';
import About from '../../component/content/About';
import Hero from '../../component/content/Hero';
import Article from '../../component/content/Article';
import Konsultasi from '../../component/content/Konsultasi';

import '../../assets/css/style.css';

function Homepages() {
  return (
    <>
      <Navbars />
      <Hero />
      <About />
      <Article />
      <Konsultasi />
      <Footer />
    </>
  );
}

export default Homepages;
