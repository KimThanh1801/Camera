import React from 'react';
import { getData } from '../../assets/data';
import ShowCard from '../ShowCard/Showcard';


function RightContent() {
  const products = getData();

  return (
    <div id="right-content">
      <h2>Product :</h2>
      <div id="products">
        {products.map((product, index) => (
          <ShowCard
            key={index}
            loai={product.loai}
            name={product.name}
            image={product.image}
          />
        ))}
        <div style={{ clear: 'both' }} />
      </div>
      <div style={{ clear: 'both' }} />
    </div>
  );
}

export default RightContent;
