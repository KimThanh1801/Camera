import React from "react";

class Member extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name :'Ho Thi Kim Thanh',
            age: 20
        }
    }
    render (){
        return (
            <div>
            <h1>{this.state.name}</h1>
            <p>{this.state.age}</p>
            </div>
        )
    }
    
};
export default Member;