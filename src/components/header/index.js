import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import closeIcon from 'src/assets/icons/ic_close.svg';
import humbuggerIcon from 'src/assets/icons/ic_humbugger.svg';
import logoImage from 'src/assets/images/logo.png';
import LogIn from 'src/layouts/logIn';
import { itemMenu } from 'src/utils/constants';

import './style.scss';

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleToggleClicked = () => {
    setShowMenu(true);
  };

  const handleCloseClicked = () => {
    setShowMenu(false);
  };

  const handleMenuClicked = () => {
    setShowMenu(false);
  };

  const handleOverlayClicked = () => {
    setShowMenu(false);
  };

  const handleLogInClicked = () => {
    navigate('/login');
  };

  return (
    <div className='header' id='header'>
      <nav className='nav container'>
        <Link to='/' className='nav__logo'>
          <img src={logoImage} alt='logo-img' className='nav__logo-img' />
          Coffee Shop
        </Link>

        <div className={showMenu ? 'nav__menu show-menu' : 'nav__menu'} id='nav-menu'>
          <ul className='nav__list'>
            {itemMenu.map((item, index) => (
              <li key={index} className='nav__item' onClick={handleMenuClicked}>
                <NavLink to={item.path} className='nav__link'>
                  {item.title}
                </NavLink>
              </li>
            ))}
            <li className='nav__item nav__login' onClick={handleLogInClicked}>
              Đăng nhập
            </li>
          </ul>

          <div className='nav__close' id='nav-close' onClick={handleCloseClicked}>
            <img src={closeIcon} alt='close-icon' />
          </div>
        </div>

        <div className='nav__toggle' id='nav-toggle' onClick={handleToggleClicked}>
          <img src={humbuggerIcon} alt='humbugger-icon' />
        </div>
      </nav>

      {showMenu && <div className='overlay' onClick={handleOverlayClicked}></div>}
    </div>
  );
}

export default Header;
