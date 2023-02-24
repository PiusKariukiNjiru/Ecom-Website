
import React from 'react'
import "./Card.css"

function Card(props) {
  
  return (<>
    
        <div className='card'>
          <div className='card-img'>
            <img src = {props.imgUrl} alt=""></img>
            <div className='card-body'>

              <h3>{props.name}</h3>
              <p>{props.description}</p>
    
              <a href= {props.productUrl} className='cta-btn'>{props.btn} </a>
              <span>{props.price}</span>
            </div>
          </div>
        </div>
    

    
    </>
  )
}

export default Card;
