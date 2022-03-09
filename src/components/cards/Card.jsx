import React, { useState } from 'react';
import logo from '../../images/logo.svg';
import "./card.css"
import star from '../../images/star.svg'
import CardButton from '../cartButton/CardButton';


function Card() {
  return(
    <div className="card">
      <div className="card-image">
        <img src={logo}/>
      </div>
      <div className="card-title">
        <p>Lorem ipsum lorem ipsum</p>
      </div>
      <div className="card-price">
        <span>R$ 99,99</span>
      </div>
      <div className="stars">
        <img src={star} />
        <img src={star} />
        <img src={star} />
        <img src={star} />
        <img src={star} />
      </div>
      <CardButton />
    </div>
  );
}

export default Card;
