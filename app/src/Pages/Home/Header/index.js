import React from 'react';
import { HomeSvg } from '../../../Svg/index'
import './Header.css'
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <div className='Header'>
        <div className='Name'>
            <HomeSvg/>
            <h2 className='Text'>Joshi Kumar</h2>
        </div>
        <div>
           <RxHamburgerMenu color='#2F5F48' size={24} />
        </div>
         
    </div>
  );
};

export default Header;
