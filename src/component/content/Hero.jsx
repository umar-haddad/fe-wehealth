import { Container, Row, Col } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className='homepage'>
      <header className='w-100 min-vh-100 d-flex align-items-center'>
        <Container>
          <Row className='header-box d-flex align-items-center'>
            <Col lg='6'>
              <h1 className='mb-4'>
                Selamat Datang di <br /> <span>WeHealth</span> <br />
              </h1>
              <p className=''>Temukan Kesehatan Sejati Bersama Kami!</p>
              <p className='fw-semibold'>Yuk Jelajahi Lebih Lanjut!</p>
            </Col>
            <Col lg='6' className='pt-lg-0 pt-6'>
              <img src='/assets/img/heroo.svg' alt='hero-img' />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default Hero;

// import { useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';

// function Hero() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <Carousel className='home' activeIndex={index} onSelect={handleSelect}>
//       <Carousel.Item>
//         <img
//           src='/assets/img/home1.png'
//           className='w-100'
//           alt='Gambar Solusi Kesehatan'
//         />
//         <Carousel.Caption className='carousel-caption'>
//           <h3>Solusi Kesehatan yang Menyeluruh dan Terpercaya</h3>
//           <p>
//             Kesehatan yang Terpadu di Satu Tempat. Kami Ada untuk Menjaga Anda
//           </p>
//           <p>
//             <a href='#' className='btn btn-warning mt-3'>
//               Learn More
//             </a>
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           src='/assets/img/home2.png'
//           className='w-100'
//           alt='Gambar Solusi Kesehatan'
//         />
//         <Carousel.Caption className='carousel-caption'>
//           <h3>Konsultasi Medis Langsung dari Rumah Anda</h3>
//           <p>
//             Konsultasi Medis Tanpa Batas. Perawatan yang Aman, Nyaman, dan
//             Terjangkau di Genggaman Anda
//           </p>
//           <p>
//             <a href='#' className='btn btn-warning mt-3'>
//               Learn More
//             </a>
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           src='/assets/img/home3.png'
//           className='w-100'
//           alt='Gambar Solusi Kesehatan'
//         />
//         <Carousel.Caption className='carousel-caption'>
//           <h3>Berbagai Artikel Kesehatan untuk Pemahaman Lebih Mendalam</h3>
//           <p>
//             Temukan Pengetahuan Kesehatan Terbaru. Menyediakan Informasi yang
//             Anda Butuhkan untuk Hidup Sehat
//           </p>
//           <p>
//             <a href='#' className='btn btn-warning mt-3'>
//               Learn More
//             </a>
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default Hero;
