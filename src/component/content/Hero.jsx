import { Container, Row, Col } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className='homepage'>
      <header className='w-100 min-vh-100 d-flex align-items-center'>
        <Container>
          <Row className='header-box d-flex align-items-center'>
            <Col
              lg='6'
              style={{ marginTop: '50px' }}
              data-aos='fade-right'
              data-aos-duration='2000'
            >
              <h1 className='mb-4'>
                Selamat Datang di <br /> <span>WeHealth</span> <br />
              </h1>
              <p className=''>Temukan Kesehatan Sejati Bersama Kami!</p>
              <p className='fw-semibold'>Yuk Jelajahi Lebih Lanjut!</p>
            </Col>
            <Col
              lg='6'
              className='pt-lg-0 pt-5'
              style={{ marginTop: '50px' }}
              data-aos='fade-left'
              data-aos-duration='2000'
            >
              <img src='/assets/img/heroo.svg' alt='hero-img' />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default Hero;
