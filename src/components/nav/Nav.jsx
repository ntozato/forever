import React from 'react';
import "./nav.css"

function Nav() {
  const url = "/";
  return(
    <div className="menu">
      <nav>
        <a href={url}>PERFUME INFANTIL</a>
        <a href={url}>SABONETES</a>
        <a href={url}>PÓS-BANHO</a>
        <a href={url}>ASSADURAS</a>
        <a href={url}>HIDRATANTES</a>
        <a href={url}>LENÇOS UMEDECIDOS</a>
      </nav>
    </div>
    
  )
}

export default Nav;
