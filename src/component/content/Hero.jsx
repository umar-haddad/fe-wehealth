import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Hero() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className='home' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          src='/assets/img/home1.png'
          className='w-100'
          alt='Gambar Solusi Kesehatan'
        />
        <Carousel.Caption className='carousel-caption'>
          <h3>Solusi Kesehatan yang Menyeluruh dan Terpercaya</h3>
          <p>
            Kesehatan yang Terpadu di Satu Tempat. Kami Ada untuk Menjaga Anda
          </p>
          <p>
            <a href='#' className='btn btn-warning mt-3'>
              Learn More
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src='/assets/img/home2.png'
          className='w-100'
          alt='Gambar Solusi Kesehatan'
        />
        <Carousel.Caption className='carousel-caption'>
          <h3>Solusi Kesehatan yang Menyeluruh dan Terpercaya</h3>
          <p>
            Kesehatan yang Terpadu di Satu Tempat. Kami Ada untuk Menjaga Anda
          </p>
          <p>
            <a href='#' className='btn btn-warning mt-3'>
              Learn More
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src='/assets/img/home3.png'
          className='w-100'
          alt='Gambar Solusi Kesehatan'
        />
        <Carousel.Caption className='carousel-caption'>
          <h3>Solusi Kesehatan yang Menyeluruh dan Terpercaya</h3>
          <p>
            Kesehatan yang Terpadu di Satu Tempat. Kami Ada untuk Menjaga Anda
          </p>
          <p>
            <a href='#' className='btn btn-warning mt-3'>
              Learn More
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;
