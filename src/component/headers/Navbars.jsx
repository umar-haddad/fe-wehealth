import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navbars() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (Cookies.get('token')) {
      setIsLogin(true);
    }
  }, []);
  return (
    <Navbar expand='lg' className='navbar navbar-expand-lg bg-white fixed-top'>
      <Container>
        <img src='/assets/img/logo.png' alt='logo WeHealth' />
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <ul className='ms-auto text-center navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link active' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/dokter'>
                Konsultasi
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/article'>
                Artikel
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/klinik-center'>
                Klinik Center
              </Link>
            </li>
          </ul>

          <ul className='navbar-nav ms-auto mb-2 mb-lg-0 navbar-user'>
            {isLogin ? (
              <>
                <li className='nav-item nav-link-button'>
                  <Link
                    to='/dashboard'
                    className='btn btn-outline-primary rounded-3 me-2'
                  >
                    Dashboard
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className='nav-item nav-link-button'>
                  <Link
                    to='/login'
                    className='btn btn-outline-primary rounded-3 me-2'
                  >
                    Login
                  </Link>
                </li>
                <li className='nav-item nav-link-button-2'>
                  <Link to='/register' className='btn btn-primary rounded-3'>
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
