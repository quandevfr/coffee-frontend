import React from 'react';
import { Link } from 'react-router-dom';

import logoImage from 'src/assets/images/logo.png';
import facebookIcon from 'src/assets/icons/ic-facebook.svg';
import instagramIcon from 'src/assets/icons/ic-instagram.svg';
import youtubeIcon from 'src/assets/icons/ic-youtube.svg';

import './style.scss';

function Footer() {
  return (
    <footer className='footer' id='footer'>
      <div className='container footer__content'>
        <Link to='/' className='nav__logo'>
          <img src={logoImage} alt='logo-img' className='nav__logo-img' />
          Coffee Shop
        </Link>

        <div className='footer__desc'>
          Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên
          thế giới. Với nhiều đặc điểm riêng, không...
        </div>
        <div className='footer__media'>
          <div className='footer__media-button'>
            <img src={facebookIcon} alt='facebookIcon' />
          </div>
          <div className='footer__media-button'>
            <img src={instagramIcon} alt='instagramIcon' />
          </div>
          <div className='footer__media-button'>
            <img src={youtubeIcon} alt='youtubeIcon' />
          </div>
        </div>

        <div className='footer__copyright'>Copyright ©2022 All rights reserved</div>
      </div>
    </footer>
  );
}

export default Footer;
