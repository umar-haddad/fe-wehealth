import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Konsultasi() {
  const apiUrl = 'https://65281018931d71583df1d1f3.mockapi.io/health';
  const [doctors, setDoctors] = useState([]);

  async function fetchDoctors() {
    try {
      const response = await axios.get(apiUrl);
      setDoctors(response.data);
    } catch (error) {
      console.error('Error fetching doctors:', error.message);
    } finally {
      console.log('Request complete, whether successful or not.');
    }
  }

  useEffect(() => {
    fetchDoctors();
  }, []); // Empty dependency array ensures useEffect runs once after initial render

  function createCard(doctor) {
    return (
      <div key={doctor.id} className='col-12 col-md-12 col-lg-3'>
        <div className='card text-center bg-white pb-2'>
          <img
            src={doctor.gambar}
            className='card-img-top'
            alt={doctor.name}
            style={{ height: '200px', objectFit: 'cover' }}
          />
          <div className='card-body'>
            <h5 className='card-title'>{doctor.name}</h5>
            <p className='card-text'>{doctor.deskripsi}</p>
            <a href='#' className='btn btn-primary mt-auto'>
              Chat Dokter
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section
        id='konsultasi'
        className='konsultasi section-padding'
        data-aos='zoom-in'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='section-header text-center pb-5'>
                <h2>Temui Dokter Kami</h2>
                <p>Konsultasi kesehatan dengan dokter profesional</p>
              </div>
            </div>
          </div>
          <div className='row list-konsultasi'>{doctors.map(createCard)}</div>
          <div className='text-center mt-5'>
            <button className='btn btn-outline-primary text-center'>
              Lihat Lebih Banyak
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Konsultasi;
