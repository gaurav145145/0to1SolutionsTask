import React, { Component } from "react";
import { TopBar } from "./topBarComponents";
import Routes from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";
class Home extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <TopBar />
        <Routes />
      </BrowserRouter>
    );
  }
}

export default Home;
