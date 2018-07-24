import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Wallpaper do vampeta</h1>
        </header>
        <img src="~/love.jpg"/>

        <table>
          <thead>
            <tr>
              <th>Platform</th>
              <th>File</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mac (OSX)</td>
              <td>
                <a href="~/mac.zip">Download</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
