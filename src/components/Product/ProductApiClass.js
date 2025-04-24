export function ProductApiClass() {
    this.products = [
        {
            id: 1,
            name: "iphone 15",
            price: 10000000,
            image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/wysiwyg/Phone/Apple/iphone_15/dien-thoai-iphone-15-20.jpg"
        },
        {
            id: 2,
            name: "iphone 16",
            price: 15000000,
            image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/wysiwyg/Phone/Apple/iPhone-16/cate-iphone-16-series-28.jpg"
        },
        {
            id: 3,
            name: "iphone 14",
            price: 9000000,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpcKei6ArbUu3duroFGzTmJMB2tex0uvKUkw&s"
        },
        {
            id: 4,
            name: "iphone 13",
            price: 8500000,
            image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/1/5/15_2_7_2_5.jpg"
        },
        {
            id: 5,
            name: "iphone 12",
            price: 8100000,
            image: "https://cdn2.cellphones.com.vn/x/media/catalog/product/d/o/download_2__1_27.png"
        }
    ];

    this.getAllproducts = function () {
        return this.products;
    };

    this.getProductById = function (id) {
        return this.products.find(product => product.id === id);
    };

    this.addProduct = function (product) {
        const newId = this.products.length ? this.products[this.products.length - 1].id + 1 : 1;
        const newProduct = { id: newId, ...product };
        this.products.push(newProduct);
        return newProduct;
    };

    this.updateProduct = function (id, updatedData) {
        const index = this.products.findIndex(product => product.id === id);
        if (index !== -1) {
            this.products[index] = { ...this.products[index], ...updatedData };
            return this.products[index];
        }
        return null;
    };

    this.deleteProduct = function (id) {
        const index = this.products.findIndex(product => product.id === id);
        if (index !== -1) {
            return this.products.splice(index, 1)[0]; // dùng splice để xoá đúng
        }
        return null;
    };
}

export default new ProductApiClass();
