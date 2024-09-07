import React from 'react';
import '../header.scss';
import ProdHead from '../../assets/products.jpg';

const ProdHeader = () => {
  return (
    <header>
      <img src={ProdHead} alt="Rebar" />
      <div className='accTxt'>
        <div className='title'>
          <h1>Products</h1>
        </div>
        <div className='sub'>
          <h3>A variety of rebar products to fit your project</h3>
          <p>All of our rebar is made in America and properly tested to make</p><p>sure only the best is sold to you.</p>
        </div>
      </div>
    </header>
  );
};

export default ProdHeader;
