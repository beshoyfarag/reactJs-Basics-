import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
console.log(" it works");
class App extends React.Component {
    render() {
        
       var user = {
            name: "Beshoy Farag",
            hobbies: ["reading", "math", "coding "]

        };
        return (
            <div>
                <h1> hello world !</h1>
                <Header/>
                <Home name={"Beshoy"} age={15} user={user}  />
                <Home name={"George"} age={9} user={user}/>
                <Home name={"Mina"} age={8} user={user} />
            </div>
            
            
            );
    }
}

render(<App/>, window.document.getElementById("app"));