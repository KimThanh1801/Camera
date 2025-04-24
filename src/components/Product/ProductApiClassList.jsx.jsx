import React from "react";
import ProductApiClass from "./ProductApiClass";
import './ProductApiClass.css';
class ProductApiClassList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products: ProductApiClass.getAllproducts()  
        };
    }

   
    render() {
        return (
            <div>
                <h1>Danh sách các sản phẩm</h1>
                <div className="product-list">
                    {this.state.products.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.name} width="100" />
                            <h3>{product.name}</h3>
                            <p>Giá: {product.price.toLocaleString()} VND</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}


export default ProductApiClassList;