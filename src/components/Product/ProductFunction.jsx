import React, { useState, useEffect } from "react";
import ProductApiClass from "./ProductApiClass";
import './ProductFunction.css';

export function ProductFunction() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchedProducts = ProductApiClass.getAllproducts();
        setProducts(fetchedProducts); // Cập nhật sản phẩm khi component mount
    }, []);  // Chỉ chạy một lần khi component mount

    return (
        <div className="product-container">
            <h1 className="heading">Danh sách các sản phẩm</h1>
            <div className="product-list">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.name} className="product-image" />
                            <div className="product-info">
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-price">{product.price.toLocaleString()} VND</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Không có sản phẩm nào!</p>
                )}
            </div>
        </div>
    );
}

export default ProductFunction;
