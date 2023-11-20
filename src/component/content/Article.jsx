import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Article() {
  const apiUrl =
    'https://6524d54eea560a22a4ea26a4.mockapi.io/api/v1/artike?page=1&limit=3';

  const [articles, setArticles] = useState([]);

  async function fetchArticles() {
    try {
      const response = await axios.get(apiUrl);
      setArticles(response.data);
    } catch (error) {
      console.error('Error fetching articles:', error.message);
    } finally {
      console.log('Request complete, whether successful or not.');
    }
  }

  useEffect(() => {
    fetchArticles();
  }, []); // Empty dependency array ensures useEffect runs once after initial render

  function createCard(article) {
    return (
      <div key={article.id} className='col-12 col-md-12 col-lg-4'>
        <div className='card text-center bg-white pb-2'>
          <img
            src={article.gambar}
            className='card-img-top'
            alt={article.judul}
            style={{ height: '200px', objectFit: 'cover' }}
          />
          <div className='card-body'>
            <h5 className='card-title'>{article.judul}</h5>
            <p className='card-text'>{article.deskripsi}</p>
            <a href='#' className='btn btn-primary mt-auto'>
              Baca Selengkapnya
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section
        id='article'
        className='article section-padding'
        data-aos='zoom-in'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='section-header text-center pb-5'>
                <h2>Baca Artikel Kesehatan</h2>
                <p>Informasi kesehatan tepercaya hanya untukmu</p>
              </div>
            </div>
          </div>
          <div className='row list-article'>{articles.map(createCard)}</div>
          <div className='text-center mt-5'>
            <button className='btn btn-outline-primary text-center'>
              Baca Artikel Lainnya
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Article;
