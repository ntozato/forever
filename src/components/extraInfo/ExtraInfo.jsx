import React from 'react';
import social from '../../images/social.svg';
import payment from '../../images/payment.svg';
import { SocialIcon } from 'react-social-icons';
import './extraInfo.css';

function ExtraInfo() {
  const url = "/";
  return(
    <div className="extra-info">
      <p>VISITE NOSSAS REDES SOCIAIS</p>
      <div className="social">
        <SocialIcon url="https://www.instagram.com/foreverliss/" />
        {' '}
        <SocialIcon url="https://www.facebook.com/foreverliss" />
        {' '}
        <SocialIcon url="https://www.youtube.com/c/ForeverLissOficial" />
        {' '}
        <SocialIcon url="https://www.tiktok.com/@foreverlissprofessional" />
      </div>
      <div className="nav-items">
        <a href={url}>PERFUME INFANTIL</a>
        <a href={url}>SABONETES</a>
        <a href={url}>PÓS-BANHO</a>
        <a href={url}>ASSADURAS</a>
        <a href={url}>HIDRATANTES</a>
        <a href={url}>LENÇOS UMEDECIDOS</a>
      </div>
      <p>FORMAS DE PAGAMENTO</p>
      <img src={payment} />
    </div>
  );
}

export default ExtraInfo;
