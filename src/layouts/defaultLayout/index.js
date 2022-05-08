import React from 'react';
import Header from 'src/components/header';

import './style.scss';

function DefaultLayout({ children }) {
  return (
    <div className='defaultLayout'>
      <Header />
      <div className='container'>
        <div className='content'>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
