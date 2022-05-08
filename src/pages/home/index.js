import React from 'react';

import './style.scss';

function Home() {
  return (
    <div className='home'>
      <div className='home__banner'>
        <img
          className='home__banner-img'
          src='https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1937&q=80'
          alt=''
        />
      </div>
    </div>
  );
}

export default Home;
