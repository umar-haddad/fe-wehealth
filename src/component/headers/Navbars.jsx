import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../../assets/img/logo.png';

function Navbars() {
  return (
    <Navbar expand='lg' className='navbar navbar-expand-lg bg-white fixed-top'>
      <Container>
        <img src={logo} alt='logo WeHealth' />
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <ul className='ms-auto text-center navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link active' href='./'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/konsultasi'>
                Konsultasi
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/artikel'>
                Artikel
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/klinik-center'>
                Klinik Center
              </a>
            </li>
          </ul>

          <ul className='navbar-nav ms-auto mb-2 mb-lg-0 navbar-user'>
            <li className='nav-item nav-link-button'>
              <a
                href='/login'
                className='btn btn-outline-primary rounded-3 me-2'
              >
                Login
              </a>
            </li>
            <li className='nav-item nav-link-button-2'>
              <a href='/register' className='btn btn-primary rounded-3'>
                Sign Up
              </a>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
