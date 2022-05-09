import React from 'react';

import logoImage from 'src/assets/images/logo.png';

import { blogs } from 'src/mockData/dataMock';

import './style.scss';

function Blogs() {
  return (
    <div className='blogs'>
      <div className='blog__title'>
        <img src={logoImage} alt='logo-img' className='nav__logo-img' />
        Chuyện nhà
      </div>

      <div className='blog__content'>
        <div className='blog__sub-title'>Blog</div>
        <div className='blog__sub-list'>
          {blogs.map((blog, index) => (
            <div key={index} className='blog__sub-item'>
              <img src={blog.image} alt='' className='blog__sub-img' />
              <div className='blog__sub-content'>
                <div className='blog__sub-time'>{blog.time}</div>
                <div className='blog__sub-name'>{blog.name}</div>
                <p className='blog__sub-desc'>{blog.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
