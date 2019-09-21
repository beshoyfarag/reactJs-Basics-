import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
console.log(" it works");
class App extends React.Component {
    render() {
        
      
        return (
            <div>
                <h1> hello {this.props.name}!</h1>
                <Header/>
                <Home name={"headerone"} age={15} pic={"https://get.pxhere.com/photo/bee-bloom-blossom-close-up-desktop-backgrounds-field-flora-flower-wallpaper-flowers-free-wallpaper-growth-hd-wallpaper-mac-wallpaper-macro-petals-plants-sunflowers-1517325.jpg"}  />
                <Home name={"headertwo"} age={9} pic={"https://tse1.mm.bing.net/th?id=OIP.xnz2li22SbkAmKAHmQlv7wHaEK&pid=Api&rs=1"}/>
                <Home name={"headerthree"} age={8} pic={"https://www.pixelstalk.net/wp-content/uploads/2016/03/Sunset-wallpaper-HD-background-free.jpg"} />
            </div>
            
            
            );
    }
}

render(<App name=" Beshoy Farag" age={15} />, window.document.getElementById("app"));