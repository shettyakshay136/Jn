import React from 'react';
import Header from './Header'
import './style.css';

const HomePage = () => {
  return (
    <div className='Homepage'>
      <div><Header/></div>
      <div className='Maintext'>
        <h1 className='TextHome'>Joshi Kumar</h1>
        <h3 className='Tag'>Founder of JN Company – <span>Elevating spaces with luxury design, innovation, and timeless craftsmanship.</span></h3>

      </div>
    </div>
  );
};

export default HomePage;
