import React, { Component } from 'react';
import Header from "./components/Header/header";
import Content from "./components/Content/content";
import Footer from "./components/Footer/footer";
import RightContent from './components/Content/RightContent';
import Member from './components/Member';
import ProductApiClassList from './components/Product/ProductApiClassList.jsx.jsx';
import ProductFunction from './components/Product/ProductFunction.jsx';
import ProductMockApiFunction from './components/MockAPIProduct/ProductMockApiFunction.jsx';
import ProductMockApiClass from './components/MockAPIProduct/ProductMockApiClas.jsx';


class App extends React.Component {
    render() {
        return (
            <div id="container">
                {/* <Header />
                <Content></Content>
                <Footer />
                <Member/> */}
                {/* <ProductApiClassList></ProductApiClassList> */}
                {/* <ProductFunction></ProductFunction> */}
                {/* <ProductMockApiFunction/> */}
                <ProductMockApiClass/>
            </div>
        );
    }
}

export default App;
