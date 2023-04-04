import Search from './Search';
import Products from './Products';
import Card from './Card';
import Pagination from './Pagination';
import React, { useState } from 'react';

function FinalCard() {
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  // Filter products based on search value
  const filteredProducts = Products.filter(product => {
    const lowerCaseValue = searchValue.toLowerCase();
    return (
      product.name.toLowerCase().includes(lowerCaseValue) ||
      product.description.toLowerCase().includes(lowerCaseValue)
    );
  });

  // Get current products based on pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <Search setSearchValue={setSearchValue} />
      {currentProducts.length ? (
        <>
          <div className="cardss">
            {currentProducts.map(product => (
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
          <Pagination
            productsPerPage={productsPerPage}
            totalProducts={filteredProducts.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </>
      ) : (
        <div className="notfound">
          <p>Ooohps! The product you are searching for was not found. Check back soon.</p>
        </div>
      )}
    </div>
  );
}

export default FinalCard;
