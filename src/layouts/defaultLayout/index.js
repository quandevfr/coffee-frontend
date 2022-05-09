import React from 'react';

import Header from 'src/components/header';
import Footer from 'src/components/footer';

import './style.scss';

function DefaultLayout({ children }) {
  return (
    <div className='defaultLayout'>
      <Header />
      <div className='container'>
        <div className='content'>{children}</div>
      </div>

      <Footer />
    </div>
  );
}

export default DefaultLayout;
