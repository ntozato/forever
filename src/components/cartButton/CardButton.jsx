import React, { useState } from 'react';
import { BsCart } from "react-icons/bs";
import './cardButton.css'


function CardButton() {
  const [addedToCart, setAddedToCart] = useState(false);

  const normalButton = () => {
    return(
      <div className="card-button">
        <button type="button" onClick={() => setAddedToCart(true)}>
          <BsCart className="cart-icon"/>
          Adicionar ao carrinho
        </button>
      </div>
    );
  };

  const addedButton = () => {
    return(
      <div className="added-button">
        <button type="button">
          Item adicionado ao carrinho!
        </button>
      </div>
    );
  };

  return(
    <div>
      {!addedToCart && normalButton()}
      {addedToCart && addedButton()}
    </div>
  );
}

export default CardButton;
