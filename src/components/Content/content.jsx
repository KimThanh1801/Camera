import React from "react";

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
                                                    <li>
                                                        <a href="#">Menu item 3.4.5.1.4</a>
                                                        <ul className="drop">
                                                            <li><a href="#">Menu item 3.4.5.1.4.1</a></li>
                                                            <li><a href="#">Menu item 3.4.5.1.4.2</a></li>
                                                            <li><a href="#">Menu item 3.4.5.1.4.3</a></li>
                                                            <li><a href="#">Menu item 3.4.5.1.4.4</a></li>
                                                        </ul>
                                                    </li>
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

            {/* this is a content for item */}
            <div id="right-content">
                <h2>Product :</h2>
                <div id="products">
                    {[1, 2, 3, 4, 5].map((num, index) => (
                        <div className="product" key={index}>
                            <div className="text">
                                <div className="p-name"><a href="item.html">LUMIX DMC-G{index % 2 === 0 ? 2 : 3}</a></div>
                            </div>
                            <div className="p-img">
                                <img src={`images/mayanh${(index % 3) + 1}.jpg`} width="200" height="200" alt="Product" />
                            </div>
                            <div className="text">
                                <div className="p-cat">DIGITAL CAMERA</div>
                                <div className="p-price">Please Call</div>
                                <input type="button" className="button" name="add" value="Add to cart" />
                            </div>
                            <div className="clear"></div>
                        </div>
                    ))}
                    <div style={{ clear: "both" }}></div>
                </div>
                <div style={{ clear: "both" }}></div>
            </div>

            <div style={{ clear: "both" }}></div>
        </div>
    );
}

export default Content;
