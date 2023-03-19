import React, { useState } from 'react';
import ProductInfo from './ProductInfo';
import './Card.css';

function Card(props) {
  const [showInfo, setShowInfo] = useState(false);

  const handleClick = () => {
    setShowInfo(true);
  };

  const handleClose = () => {
    setShowInfo(false);
  };

  return (
    <>
      <div className='card' onClick={handleClick}>
        <div className='card-img'>
          <img src={props.imgUrl} alt='' />
          <div className='card-body'>
            <h3>{props.name}</h3>
            <p>{props.description}</p>            
            <a href={props.productUrl} className='cta-btn'>
              {props.btn}
            </a>
            <span>{props.price}</span>
            
          </div>
        </div>
      </div>

      {showInfo && (
        <div className='overlay'>
          <ProductInfo
            imgUrl={props.imgUrl}
            name={props.name}
            description={props.description}
            moredescription={props.moredescription}
            price={props.price}
            productUrl={props.productUrl}
            btn={props.btn}
            onClose={handleClose}
          />
        </div>
      )}
    </>
  );
}

export default Card;
