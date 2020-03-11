import React, { Component } from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Liste from "./components/Liste";

class App extends Component {
  render() {
    return <div className="App">
      <Header />
      <div className="container">
        <Liste />
      </div>
    </div>;
  }
}

export default App;
