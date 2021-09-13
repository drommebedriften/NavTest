import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Bedrifter from "./Bedrifter";
import BedriftStor from "./BedriftStor";
import BedriftLiten from "./BedriftLiten";
import "./Bedrifter.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/:path(|bedrifter)">
            <Bedrifter
              bedrifter2Props={bedrifterData.bedrifter2Props}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
const descriptionData = {
    children: "Greenstat er et energiselskap som utvikler og investerer i prosjekter og selskaper som bidrar til utslippskutt og grønn verdiskapning.",
};

const bedriftStorData = {
    logo: "https://anima-uploads.s3.amazonaws.com/projects/6136c58c0e55840064d54ca0/releases/6136cf2d79196f7985bdd4ff/img/logo@2x.png",
    text1: "Greenstat",
    headerI657874653: "Artikler:",
    descriptionI657874: "Her kommer artikler",
    descriptionProps: descriptionData,
};

const bedriftLitenData = {
    avatar: "https://anima-uploads.s3.amazonaws.com/projects/6136c58c0e55840064d54ca0/releases/6136cf2d79196f7985bdd4ff/img/avatar-1@2x.png",
    text2: "Aibel",
    dateI65787565383: "Bedriftskategori",
};

const bedrifter2Data = {
    bedriftStorProps: bedriftStorData,
    bedriftLitenProps: bedriftLitenData,
};

const navbar4Data = {
    overlapGroup2: "https://anima-uploads.s3.amazonaws.com/projects/6136c58c0e55840064d54ca0/releases/6136f4250fa209db6bc1a386/img/background@2x.png",
    titleI6579976537: "Bedrifter",
    searchIcon: "https://anima-uploads.s3.amazonaws.com/projects/6136c58c0e55840064d54ca0/releases/6136f4250fa209db6bc1a386/img/search-icon@2x.png",
};

const iconTabBarPerson2Data = {
    text4: "􀉬",
    reactIconsMdMdbusiness: "https://anima-uploads.s3.amazonaws.com/projects/6136c58c0e55840064d54ca0/releases/6136f4e2e340aa0913feae76/img/react-icons-md-mdbusiness-1@2x.png",
};

const iconTabBarPerson22Data = {
    text4: "􀉟",
    reactIconsMdMdbusiness: "https://anima-uploads.s3.amazonaws.com/projects/6136c58c0e55840064d54ca0/releases/6136f4e2e340aa0913feae76/img/react-icons-md-mdaccountbox-1@2x.png",
};

const tabBarLight4ItemsData = {
    tabBarLight4Items: "https://anima-uploads.s3.amazonaws.com/projects/6136c58c0e55840064d54ca0/releases/6136f4e2e340aa0913feae76/img/background-3@2x.png",
    text3: "􀎟",
    reactIconsMdMdwidgets: "https://anima-uploads.s3.amazonaws.com/projects/6136c58c0e55840064d54ca0/releases/6136f4e2e340aa0913feae76/img/react-icons-md-mdwidgets-1@2x.png",
    labelI664110866: "Forside",
    iconTabBarMessage: "https://anima-uploads.s3.amazonaws.com/projects/6136c58c0e55840064d54ca0/releases/6136f4e2e340aa0913feae76/img/icon---tab-bar---message-1@2x.png",
    labelI6641108662: "Spill",
    labelI6641108663: "Bedrifter",
    labelI6641108664: "Profil",
    iconTabBarPerson2Props: iconTabBarPerson2Data,
    iconTabBarPerson22Props: iconTabBarPerson22Data,
};

const bedrifterData = {
    bedrifter2Props: bedrifter2Data,
    navbar4Props: navbar4Data,
    tabBarLight4ItemsProps: tabBarLight4ItemsData,
};

