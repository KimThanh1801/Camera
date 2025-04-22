import React from 'react';
import useGetData from '../../assets/data1';
import ShowCard from '../ShowCard/Showcard';

function RightContent() {
  // Lấy dữ liệu từ hook useGetData
  const products = useGetData();

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
