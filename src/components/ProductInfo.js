import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './ProductInfo.css';

function ProductInfo(props) {
  return (
    <div className='product-info'>
      <button className='close-icon' onClick={props.onClose}>
        <FontAwesomeIcon icon={faTimes} size='2x' />
      </button>
      <div className='ProductInfocard'>
        <div className='ProductInfocard-img'>
          <img src={props.imgUrl} alt='' />
        </div>
        <h3>{props.name}</h3>
        <div className='ProductInfocard-body'>
          <ul>
            {props.moredescription.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <a href={props.productUrl} className='cta-btn'>
            {props.btn}
          </a>
          <span>{props.price}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
