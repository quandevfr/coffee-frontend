import React from 'react';
import { Link } from 'react-router-dom';

import BannerSlider from 'src/components/bannerSlider';
import ourImage from 'src/assets/images/image01.png';
import coffee01 from 'src/assets/images/coffee01.png';
import coffee02 from 'src/assets/images/coffee02.png';
import coffee03 from 'src/assets/images/coffee03.png';
import coffee04 from 'src/assets/images/coffee04.png';
import coffeeImage from 'src/assets/images/coffee-png.png';

import { productsHot } from 'src/mockData/dataMock';

import './style.scss';
import Blogs from 'src/components/blogs';

function Home() {
  return (
    <div className='home'>
      <div className='home__banner'>
        <BannerSlider />

        <div className='home__content'>
          <div className='home__content-info'>
            <div className='info__content'>
              <h2 className='info__content-title'>VỀ CHÚNG TÔI</h2>
              <p className='info__content-desc'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </div>
            <div className='info__image'>
              <img src={ourImage} alt='our-image' />
            </div>
          </div>

          <div className='home__content-menu'>
            <div className='menu__image'>
              <img src={coffee01} alt='coffee01' />
              <img src={coffee02} alt='coffee02' />
              <img src={coffee03} alt='coffee03' />
              <img src={coffee04} alt='coffee04' />
            </div>
            <div className='menu__content'>
              <h2 className='menu__content-title'>MENU CỦA CHÚNG TÔI</h2>
              <p className='menu__content-desc'>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                ocean.
              </p>
              <Link to='/products' className='menu__button'>
                Menu
              </Link>
            </div>
          </div>

          <div className='home__products'>
            <h2 className='home__products-title'>Sản phẩm nổi bật</h2>
            <p className='home__products-desc'>
              Sự kết hợp ăn ý giữa Đào cùng trà 100% hoa Hibiscus tự nhiên, tạo nên tổng thể hài hoà dễ gây “thương nhớ”
              cho team thích món thanh mát, có vị chua nhẹ.
            </p>

            <div className='home__products-list'>
              {productsHot.map((product, index) => (
                <div key={index} className='home__products-item'>
                  <img src={product.image} alt='' />
                  <div className='home__products--content'>
                    <div className='home__products--item-name'>{product.name}</div>
                    <div className='home__products--item-desc'>{product.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='home__content-blog'>
            <Blogs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
