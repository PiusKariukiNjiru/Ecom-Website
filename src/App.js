import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Products from './components/Products';

import "./App.css"
import Card from './components/Card';

function App() {

  

  return (<div className='main'>
    
    <div><Header/></div>
    
    <div><Search/></div>
    <div className='cardss'>
      {Products.map((Products) => (
        <Card
          key={Products.id}
          imgUrl={Products.imgUrl}
          name={Products.name}
          description={Products.description}
          btn= "Grab on Amazon"
          productUrl = {Products.productUrl}
          price={Products.price}
        />
      ))}
         
          </div>
    

  </div>
    
  );
  
}

export default App;