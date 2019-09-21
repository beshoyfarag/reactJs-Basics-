import React from "react";

export class Home extends React.Component {
    render() {
        console.log(this.props);
       
       return (
            <div>
               <h2> in new commponent home </h2>
               <h3> your name is {this.props.name}, your age is {this.props.age} </h3>
               <p> user object => name: {this.props.user.name}</p>
             
            </div>
        );
    }

}