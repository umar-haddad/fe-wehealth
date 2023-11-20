import gifdokter from '../../assets/img/d1.gif';

function About() {
  return (
    <div>
      <section
        id='about'
        className='about section-padding'
        data-aos='zoom-in-up'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-12 col-12'>
              <div className='about-img'>
                <img src={gifdokter} alt='' className='img-fluid' />
              </div>
            </div>
            <div className='col-lg-6 col-md-12 col-12 ps-lg-5 mt-md-5'>
              <div className='about-text'>
                <h2>Selamat Datang di WeHealth</h2>
                <p>
                  WeHealth merupakan pintu akses kesehatan yang mudah dijangkau,
                  memberikan informasi kesehatan, menyediakan akses cepat ke
                  sumber medis terdekat, menghubungkan pengguna dengan
                  profesional kesehatan.
                </p>
                <a href='#' className='btn btn-primary'>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
