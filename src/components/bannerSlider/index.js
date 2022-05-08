import React from 'react';
import Slider from 'react-slick';

import { slides } from 'src/mockData/dataMock';

import './style.scss';

function BannerSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className='carousel'>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className='carousel__item'>
            <img className='home__banner-img' src={slide.img} alt={slide.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BannerSlider;
