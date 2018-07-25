import React, { Component } from "react";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mac: "curl " + document.location.href + "mac.sh > install.sh && bash install.sh && rm -f install.sh"
    }
    this.copy = this.copy.bind(this)
  }
  copy(e) {
    e.target.select()
    document.execCommand("copy");
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Wallpaper do vampeta</h1>
          <img src={process.env.PUBLIC_URL + "/love.jpg"} style={{ maxHeight: 100 }} />
        </header>
        <h1>Mac book OSX</h1>
        <input className="link" type="text" value={this.state.mac} id="mac" onClick={this.copy} disabled/>
      </div>
    );
  }
}

export default App;
