import React, { useState, useEffect } from "react";

export function ProductMockApiFunction() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Lấy sản phẩm từ mock API
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then(data => setProducts(data)) 
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    return (
        <div>
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

export default ProductMockApiFunction;
