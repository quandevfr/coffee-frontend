import React from 'react';

import { productsList } from 'src/mockData/dataMock';

import './style.scss';

function Products() {
  return (
    <>
      <div className='products'>
        <div className='products__title'>Menu Coffee Shop</div>
        <div className='products__list'>
          {productsList.map((product, index) => (
            <div key={index} className='products__item'>
              <img src={product.image} alt='' className='products__item-img' />
              <div className='products__item-content'>
                <div className='products__item--content-name'>{product.name}</div>
                <p className='products__item--content-desc'>{product.desc}</p>
                <div className='products__item-content-price'>{`${product.price} đ`}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
