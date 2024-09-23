import Image from 'next/image'
import React from 'react';
import './Image.css'

const Worklayout = ({image , title , desc}) => {
  return (
    <div className='Layout'>
      <div className='Dimensions'>
        <Image
          src={image}
          alt="Picture of the author"
          className="image-hover" 
        />

      </div>
      <div className='title'>
        <h2>{title}</h2>
      </div>
      <div className='desc'>
        <p>{desc}</p>
      </div>
        
         
    </div>
  );
};

export default Worklayout;
