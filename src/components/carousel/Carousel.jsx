import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from '../../images/logo.svg'
import './carousel.css'
import Card from '../cards/Card';

function ItemsCarousel() {
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };
  return(
    <div style={{maxWidth: '1140px', margin: '0 auto'}}>
      <Slider {...settings1}>
      <div className='items1'>
        <img src={logo} className='item1'/>
      </div>
      <div className='items1'>
        <img src={logo} className='item1'/>
      </div>
      <div className='items1'>
        <img src={logo} className='item1'/>
      </div>
      <div className='items1'>
        <img src={logo} className='item1'/>
      </div>
      </Slider>
    </div>
  );
}

export default ItemsCarousel;