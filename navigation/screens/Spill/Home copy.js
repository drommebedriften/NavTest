import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Pressable, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useLinkProps } from '@react-navigation/native';

import Content from "./Content";
import "./spill.css";
import { Link } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      
      <Router>
        <Switch>
          <Route path="/:path(|657_897)" >

            <Content
              expandedcardProps={contentData.expandedcardProps}
              compactViewProps={contentData.compactViewProps}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
const expandedcardData = {
    expandedcard: "https://anima-uploads.s3.amazonaws.com/projects/6136c58c0e55840064d54ca0/releases/6136cce6b1b66a58f61391a6/img/img-2@2x.png",
    likesI6578976531: "473",
    amountI657897653: "7min",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/6136c58c0e55840064d54ca0/releases/6136f4250fa209db6bc1a386/img/vector@2x.png",
};

const compactcardData = {
    avatar: "https://anima-uploads.s3.amazonaws.com/projects/6136c58c0e55840064d54ca0/releases/6136cce6b1b66a58f61391a6/img/avatar-2@2x.png",
    titleI6578976531: "Innføring i Havvind",
    subtitleI65789765: "Introduksjonsmodul til havvind",
    amountI657897653: "5m",
};

const compactViewData = {
    compactcardProps: compactcardData,
};

const contentData = {
    expandedcardProps: expandedcardData,
    compactViewProps: compactViewData,
};

