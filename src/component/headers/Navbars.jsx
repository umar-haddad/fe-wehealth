import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

import { navLinks } from '../../data/index';
import { NavLink, useNavigate } from 'react-router-dom';
import { Dropdown } from "antd";

import {
  UserOutlined,
} from '@ant-design/icons';

const Navbars = () => {
  const [changeColor, setChangeColor] = useState(false);
  const navigate = useNavigate();

  const email = Cookies.get('email');

  const handleLogout = () => {
    console.log('logout');
    Cookies.remove('token');
    Cookies.remove('email');
    Cookies.remove('role');
    Cookies.remove('id');
    navigate('/login');
  };

  const handleClickItemUser = (e) => {
    if (e.key === 'profile') navigate('/profile');
    else if (e.key === 'dashboard') navigate('/dashboard');
    else if (e.key === 'chat') navigate('/chat');
    else handleLogout();
  };

  const itemsUser = [
    { key: 'profile', label: <span>Profile</span> },
    Cookies.get('role') === 'admin' && { key: 'dashboard', label: <span>Dashboard</span> },
    { key: 'chat', label: <span>Konsultasi</span> },
    { key: 'logout', label: <span>Logout</span> }
  ];

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener('scroll', changeBackgroundColor);
  });

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (Cookies.get('token')) {
      setIsLogin(true);
    }
  }, []);

  return (
    <div>
      <Navbar expand='lg' className={changeColor ? 'color-active' : ''}>
        <Container>
          <Navbar.Brand>
            <img src='/assets/img/logo.png' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mx-auto text-center'>
              {navLinks.map((link) => {
                return (
                  <div className='nav-link' key={link.id}>
                    <NavLink
                      to={link.path}
                      className={({ isActive, isPending }) =>
                        isPending ? 'pending' : isActive ? 'active' : ''
                      }
                      end
                    >
                      {link.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav>

            <ul className='navbar-nav ms-auto mb-2 mb-lg-0 navbar-user text-center'>
              {isLogin ? (
                <>
                  {/* <li className='nav-item nav-link-button'>
                    <NavLink
                      to='/dashboard'
                      className='btn btn-outline-primary rounded-3 me-2'
                      activeClassName='active'
                    >
                      Dashboard
                    </NavLink>
                  </li> */}
                  <div className='header-container'>
                    <Dropdown
                      menu={{
                        items: itemsUser,
                        style: { width: '50%' },
                        onClick: handleClickItemUser,
                      }}
                      placement='bottomLeft'
                      arrow
                      trigger={['click']}
                    >
                      <div className='user-profile'>
                        <UserOutlined />
                        <span>{email}</span>
                      </div>
                    </Dropdown>
                  </div>
                </>
              ) : (
                <>
                  <li className='nav-item nav-link-button'>
                    <NavLink
                      to='/login'
                      className='btn btn-outline-primary rounded-3 me-2'
                      activeClassName='active'
                    >
                      Login
                    </NavLink>
                  </li>
                  <li className='nav-item nav-link-button-2'>
                    <NavLink
                      to='/register'
                      className='btn btn-primary rounded-3'
                      activeClassName='active'
                    >
                      Sign Up
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;

// import Cookies from 'js-cookie';
// import { useEffect, useState } from 'react';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import { NavLink } from 'react-router-dom';

// function Navbars() {
//   const [isLogin, setIsLogin] = useState(false);

//   useEffect(() => {
//     if (Cookies.get('token')) {
//       setIsLogin(true);
//     }
//   }, []);

//   return (
//     <Navbar
//       expand='lg'
//       className='nav-link navbar navbar-expand-lg bg-white fixed-top'
//     >
//       <Container>
//         <img src='/assets/img/logo.png' alt='logo WeHealth' />
//         <Navbar.Toggle aria-controls='basic-navbar-nav' />
//         <Navbar.Collapse id='basic-navbar-nav'>
//           <ul className='ms-auto text-center navbar-nav'>
//             <li className='nav-item'>
//               <NavLink to='/' activeClassName='active'>
//                 <span className='link-text'>Home</span>
//               </NavLink>
//             </li>
//             <li className='nav-item'>
//               <NavLink to='/dokter' activeClassName='active'>
//                 <span className='link-text'>Konsultasi</span>
//               </NavLink>
//             </li>
//             <li className='nav-item'>
//               <NavLink to='/article' activeClassName='active'>
//                 <span className='link-text'>Artikel</span>
//               </NavLink>
//             </li>
//             <li className='nav-item'>
//               <NavLink to='/klinik-center' activeClassName='active'>
//                 <span className='link-text'>Faskes</span>
//               </NavLink>
//             </li>
//           </ul>

//           <ul className='navbar-nav ms-auto mb-2 mb-lg-0 navbar-user text-center'>
//             {isLogin ? (
//               <>
//                 <li className='nav-item nav-link-button'>
//                   <NavLink
//                     to='/dashboard'
//                     className='btn btn-outline-primary rounded-3 me-2'
//                     activeClassName='active'
//                   >
//                     Dashboard
//                   </NavLink>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li className='nav-item nav-link-button'>
//                   <NavLink
//                     to='/login'
//                     className='btn btn-outline-primary rounded-3 me-2'
//                     activeClassName='active'
//                   >
//                     Login
//                   </NavLink>
//                 </li>
//                 <li className='nav-item nav-link-button-2'>
//                   <NavLink
//                     to='/register'
//                     className='btn btn-primary rounded-3'
//                     activeClassName='active'
//                   >
//                     Sign Up
//                   </NavLink>
//                 </li>
//               </>
//             )}
//           </ul>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Navbars;
