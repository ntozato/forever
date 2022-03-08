import React, { useState } from 'react'
import './header.css'
import { IoPerson } from "react-icons/io5";
import { BsCart } from "react-icons/bs";
import logo from '../../images/logo.svg';
import { Navigate } from 'react-router-dom';


function Header() {
  const [ navigate, setNavigate ] = useState(false);
  return(
    <header className="header">
      <div style={{maxWidth: '1140px', margin: '0 auto', display: 'grid', gridTemplateColumns: '160px auto', gap: '68px', width: '100%'}}>
        <a href='/'>
        <img 
        src={logo}
        alt="logo"
        className="logo"/>
        </a>
        <div style={{alignItems: 'center', display: 'grid', gridTemplateColumns: '2fr 0.7fr', gap: '42px'}}>
          <div style={{display: 'flex'}}>
            <input 
            type="text"
            className="input"
            placeholder="        Qual o mimo de hoje para o seu anjinho?"
            />
            <button type="button" className="search-button">Buscar</button>
          </div>
          <div className="icons">
            <div className="icon">
              <a href='/' className="test"> 
                <IoPerson className="person-icon" />
              </a>
              <span>Minha conta</span>
            </div>
            <div className="icon">
              <a href='/' className="test"> 
                <BsCart className="person-icon"/>
              </a>
                <span>Carrinho</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;