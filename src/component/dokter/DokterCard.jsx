import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

function DokterCard({ dokter }) {
  return (
    <div className='col-sm-6 col-md-4 col-lg-3'>
      <div
        className='card '
        style={{
          height: '100%',
        }}
      >
        <img
          src={dokter.image}
          className='card-img-top card-img-dokter'
          alt={dokter.name}
          loading='lazy'
        />
        <div className='card-body'>
          <h3 className='card-title text-clamp'>{dokter.name}</h3>
          <p className='card-text text-clamp'>{dokter.category}</p>

          <Link
            to={`/dokter/${dokter._id}`}
            className='mt-auto text-decoration-none fw-medium'
          >
            Chat Dokter
          </Link>
        </div>
      </div>
    </div>
  );
}

DokterCard.propTypes = {
  dokter: propTypes.object.isRequired,
};

export default DokterCard;
