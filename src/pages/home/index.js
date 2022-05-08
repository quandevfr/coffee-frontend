import React from 'react';

import BannerSlider from 'src/components/bannerSlider';

import './style.scss';

function Home() {
  return (
    <div className='home'>
      <div className='home__banner'>
        <BannerSlider />
      </div>
    </div>
  );
}

export default Home;
