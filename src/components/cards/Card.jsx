import React from 'react';
import logo from '../../images/logo.svg';
import "./card.css"
import star from '../../images/star.svg'
import { BsCart } from "react-icons/bs";


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
      <div className="card-button">
        <button type="button">
          <BsCart className="cart-icon"/>
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}

export default Card;
