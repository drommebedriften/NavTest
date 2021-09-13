import React from 'react';

class App extends React.Component {
  render() {
    return <Profil {...profilData} data-id="I654:1905;654:1838:an-component-instance" />;
  }
}

export default App;

class Profil extends React.Component {
  render() {
    const {
      image4,
      lvlI654190565418,
      text3,
      text1,
      text2,
      text5,
      text4,
      badge_5,
      badge_6,
      badge_4,
      badge_11,
    } = this.props;

    return (
      <div className="profil border-1px-mercury" data-id="I654:1905;654:1838">
        <div className="overlap-group6" data-id="an|FUg56mt5">
          <div className="overlap-group3" data-id="an|X5V7O3iY">
            <div className="karakterbilde" data-id="I654:1905;654:1838;653:1428">
              <img className="image-4" data-id="I654:1905;654:1838;653:1429" src={image4} />
            </div>
            <div className="lvl-i654190565418" data-id="I654:1905;654:1838;653:1448">
              {lvlI654190565418}
            </div>
          </div>
          <div className="ferdigheter" data-id="I654:1905;654:1838;653:1430">
            <div className="text-3" data-id="I654:1905;654:1838;653:1437">
              {text3}
            </div>
            <div className="flex-row roboto-medium-malachite-10px roboto-medium-malachite-10px" data-id="an|7iNfJROt">
              <div className="overlap-group" data-id="an|HUXvai3N">
                <div className="text-01" data-id="I654:1905;654:1838;653:1433">
                  {text1}
                </div>
              </div>
              <div className="overlap-group" data-id="an|WrO2AApG">
                <div className="text-2" data-id="I654:1905;654:1838;653:1436">
                  {text2}
                </div>
              </div>
            </div>
          </div>
          <div className="utdanning" data-id="I654:1905;654:1838;653:1438">
            <div className="text-5" data-id="I654:1905;654:1838;653:1442">
              {text5}
            </div>
            <div className="group-13" data-id="I654:1905;654:1838;653:1439">
              <div className="overlap-group" data-id="an|JtQpH2Co">
                <div className="rectangle-3" data-id="I654:1905;654:1838;653:1440"></div>
                <div className="text-4" data-id="I654:1905;654:1838;653:1441">
                  {text4}
                </div>
              </div>
            </div>
          </div>
          <div className="badges" data-id="I654:1905;654:1838;653:1443">
            <img className="badge5" data-id="I654:1905;654:1838;653:1444" src={badge_5} />
            <img className="badge" data-id="I654:1905;654:1838;653:1445" src={badge_6} />
            <img className="badge" data-id="I654:1905;654:1838;653:1446" src={badge_4} />
            <img className="badge" data-id="I654:1905;654:1838;653:1447" src={badge_11} />
          </div>
        </div>
      </div>
    );
  }
}

const profilData = {
    image4: "https://anima-uploads.s3.amazonaws.com/projects/6136c58c0e55840064d54ca0/releases/6136cf2d79196f7985bdd4ff/img/image-4@2x.png",
    lvlI654190565418: "Lvl 27",
    text3: "Ferdigheter:",
    text5: "Utdanning:",
    text4: "Rettsvitskap, master",
    badge_5: "https://anima-uploads.s3.amazonaws.com/projects/6136c58c0e55840064d54ca0/releases/6136cf2d79196f7985bdd4ff/img/badge-5@2x.png",
    badge_6: "https://anima-uploads.s3.amazonaws.com/projects/6136c58c0e55840064d54ca0/releases/6136cf2d79196f7985bdd4ff/img/badge-6@2x.png",
    badge_4: "https://anima-uploads.s3.amazonaws.com/projects/6136c58c0e55840064d54ca0/releases/6136cf2d79196f7985bdd4ff/img/badge-4@2x.png",
    badge_11: "https://anima-uploads.s3.amazonaws.com/projects/6136c58c0e55840064d54ca0/releases/6136cf2d79196f7985bdd4ff/img/badge-1-1@2x.png",
};

