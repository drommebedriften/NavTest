import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Feedscroll from "./Content";
import Bedrifthighlight from "./Bedrifthighlight";
import "./Feed.css";

class App extends React.Component {
    render() {
      return (
          <div class="feedcontent">
      <div class="scrollcontainer">
      <Feedscroll></Feedscroll>
      </div>,
      <div>
            <Bedrifthighlight></Bedrifthighlight>
      </div>

          </div>

      );
    }
  }

export default App;