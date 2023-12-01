function About() {
  return (
    <div>
      <section id='about' className='about section-padding ' data-aos='zoom-in'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-12 col-12'>
              <div className='about-img'>
                <img src='/assets/img/d1.gif' alt='' className='img-fluid' />
              </div>
            </div>
            <div className='col-lg-6 col-md-12 col-12 ps-lg-5 mt-md-5'>
              <div className='about-text mt-5'>
                <h2>Apa itu WeHealth?</h2>
                <p>
                  WeHealth merupakan pintu akses kesehatan yang mudah dijangkau,
                  memberikan informasi kesehatan, menyediakan fitur untuk cek
                  kesehatanmu, menghubungkan pengguna dengan profesional
                  kesehatan.
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
