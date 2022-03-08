import React from 'react';
import Card from '../cards/Card';
import './featured.css'

function Featured() {
  return(
    <div className="featured">
      <div className="featured-1">
      <span className="fbd">FOREVER BABY DESTAQUES</span>
      </div>
      <div className="featured-1">
        <div className="featured-item-1">
          <Card />
        </div>
        <div className="featured-item-1">
          <Card />
        </div>
        <div className="featured-item-1">
          <Card />
        </div>
        <div className="featured-item-1">
          <Card />
        </div>
      </div>
      <div className="featured-1">
      <span className="fbd-2">FOREVER BABY DESTAQUES</span>
      </div>
      <div className="featured-1">
        <div className="featured-item-2">
          <Card />
        </div>
        <div className="featured-item-2">
          <Card />
        </div>
        <div className="featured-item-2">
          <Card />
        </div>
        <div className="featured-item-2">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Featured;
