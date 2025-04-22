import React, { Component } from 'react';
import Header from "./components/Header/header";
import Content from "./components/Content/content";
import Footer from "./components/Footer/footer";
import RightContent from './components/Content/RightContent';

class App extends React.Component {
    render() {
        return (
            <div id="container">
                <Header />
                <Content></Content>
                <Footer />
            </div>
        );
    }
}

export default App;
