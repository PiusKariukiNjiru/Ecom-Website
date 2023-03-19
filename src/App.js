import React, { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Products from './components/Products';
import Card from './components/Card';
import Footer from './components/Footer';


import './App.css';

function App() {
  const [searchValue, setSearchValue] = useState('');

  const filteredProducts = Products.filter(product => {
    const lowerCaseValue = searchValue.toLowerCase();
    return (
      product.name.toLowerCase().includes(lowerCaseValue) ||
      product.description.toLowerCase().includes(lowerCaseValue)
    );
  });

  return (<>
    <div className="main">
      <Header />
      <Search setSearchValue={setSearchValue} />
      {filteredProducts.length ? (
        <div className="cardss">
          {filteredProducts.map(product => (
            <Card
              key={product.id}
              imgUrl={product.imgUrl}
              name={product.name}
              description={product.description}
              moredescription={product.moredescription}              
              btn="Grab on Amazon"
              productUrl={product.productUrl}
              price={product.price}
            />
          ))}
        </div>
      ) : (

        <div className='notfound'>
          <p>Ooohps! The product you are searching for was not found. Check back soon.</p>
        </div>
      )}
    </div>
    <Footer />

    </>
  );
}

export default App;
