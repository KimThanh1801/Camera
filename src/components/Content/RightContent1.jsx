import React from "react";
import { getData } from '../../assets/data';
import ShowCard from '../ShowCard/Showcard';

function RightContent1() {
  const products = getData();

  return (
    <div className="right-content">
      <h2>Product :</h2>
      <div className="products">
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
    </div>
  );
}

function Content() {
  return (
    <div id="content">
      {/* this is the content for menu */}
      <div id="left-content">
        <h1>Category</h1>
        <ul className="drop">
          <li><a href="#">Menu item 1</a></li>
          <li><a href="#">Menu item 2</a></li>
          <li>
            <a href="#">Menu item 3</a>
            <ul className="drop">
              <li><a href="#">Menu item 3.1</a></li>
              <li><a href="#">Menu item 3.2</a></li>
              <li><a href="#">Menu item 3.3</a></li>
              <li>
                <a href="#">Menu item 3.4</a>
                <ul className="drop">
                  <li><a href="#">Menu item 3.4.1</a></li>
                  <li><a href="#">Menu item 3.4.2</a></li>
                  <li><a href="#">Menu item 3.4.3</a></li>
                  <li>
                    <a href="#">Menu item 3.4.4</a>
                    <ul className="drop">
                      <li><a href="#">Menu item 3.4.5.1</a></li>
                      <li><a href="#">Menu item 3.4.5.2</a></li>
                      <li><a href="#">Menu item 3.4.5.3</a></li>
                      <li>
                        <a href="#">Menu item 3.4.5.4</a>
                        <ul className="drop">
                          <li><a href="#">Menu item 3.4.5.1.1</a></li>
                          <li><a href="#">Menu item 3.4.5.1.2</a></li>
                          <li><a href="#">Menu item 3.4.5.1.3</a></li>
                          <li><a href="#">Menu item 3.4.5.1.4</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href="#">Menu item 4</a></li>
          <li><a href="#">Menu item 5</a></li>
          <li><a href="#">Menu item 6</a></li>
        </ul>
      </div>

      {/* Content for products */}
      <RightContent1/>
    </div>
  );
}

export default Content;
