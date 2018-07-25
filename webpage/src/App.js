import React, { Component } from "react";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Wallpaper do vampeta</h1>
          <img src={process.env.PUBLIC_URL + "/love.jpg"} style={{maxHeight:100}}/>
        </header>
        <h1>Mac book OSX</h1>
        <text>{"curl " + document.location.href + "mac.sh > install.sh && bash install.sh && rm -f install.sh"}</text>
      </div>
    );
  }
}
export default App;
