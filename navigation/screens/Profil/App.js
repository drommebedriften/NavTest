import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Content from "./Content"
import "./Profil.css"

class App extends React.Component {
    render() {
      return (
          <view>
              <div class="Scrollcontainer"S>
              <Content></Content>
                  </div>
          </view>
      );
    }
  }

export default App;