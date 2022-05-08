import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import closeIcon from 'src/assets/icons/ic_close.svg';
import humbuggerIcon from 'src/assets/icons/ic_humbugger.svg';
import logoImage from 'src/assets/images/logo.png';

import './style.scss';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleClick = () => {
    setShowMenu(true);
  };

  const handleCloseClick = () => {
    setShowMenu(false);
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
            <li className='nav__item'>
              <Link to='/' className='nav__link active-link'>
                Trang Chủ
              </Link>
            </li>
            <li className='nav__item'>
              <Link to='/products' className='nav__link'>
                Sản Phẩm
              </Link>
            </li>
            <li className='nav__item'>
              <Link to='/abouts' className='nav__link'>
                Giới thiệu
              </Link>
            </li>
            <li className='nav__item'>
              <Link to='/contact' className='nav__link'>
                Liên hệ
              </Link>
            </li>
            <li className='nav__item'>
              <Link to='/' className='nav__login nav__link'>
                Đăng Nhập
              </Link>
            </li>
          </ul>

          <div className='nav__close' id='nav-close' onClick={handleCloseClick}>
            <img src={closeIcon} alt='close-icon' />
          </div>
        </div>

        <div className='nav__toggle' id='nav-toggle' onClick={handleToggleClick}>
          <img src={humbuggerIcon} alt='humbugger-icon' />
        </div>
      </nav>
    </div>
  );
}

export default Header;
