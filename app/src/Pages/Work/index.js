import React from 'react';
import './Work.css'
import Image from '../../Components/Image';
import {Image1 , Image2 , Image3 , Image4} from '../../PathImg'
import InfiniteScroll from '../../Components/InfiniteScroll';

const Work = () => {

  const images = [Image1, Image2, Image3, Image4];
  return (
    <div className='Work'>
        <div className='Wheading'>
            <h1 className='TextHome'>Recent Works</h1>
            <h2 className='wtag'>Explore my projects to learn more about what I do.</h2>
        </div>
        <div className='work'>
            <Image image={Image1} title={'Modern Minimalistic Home Office'} desc={'Experience the modern minimalist home office interior design with sleek finishes and decor. Embrace the simplicity and functionality of a well-designed workspace.'}/>
            <Image image={Image2} title={'Elegant Home Interiors'} desc={'Step into the world of elegant home interiors featuring a modern living room, a balcony with plants and seating, and an elegant wooden wardrobe. Explore the stylish and organized spaces for relaxation and comfort.'}/>
            <Image image={Image3} title={'Modern Bedroom and Childrens Room Design'} desc={'Discover the modern bedroom and childrens room interior designs with neutral tones, unicorn neon light decoration, and warm colors. Experience the cozy and stylish decor for both adults and kids.'}/>
            <Image image={Image4} title={'Modern Kitchen Interiors'} desc={'A collection of modern kitchen interior designs with various color schemes, cabinetry, and decor. Explore the sleek finishes, elegant wood and stone finishes, and gray and teal cabinets.'}/>
        </div>
        <div>
          <InfiniteScroll images={images}/>
        </div>
         
    </div>
  );
};

export default Work;
