import React from 'react';

class App extends React.Component {
  render() {
    return <Drmmenringer {...drmmenringerData} data-id="I654:1905;654:1839:an-component-instance" />;
  }
}

export default App;

class Drmmenringer extends React.Component {
  render() {
    const {
      text142,
      text132,
      number,
      text122,
      place,
      vector2,
      number2,
      text112,
      text10,
      vector3,
      number3,
      text9,
    } = this.props;

    return (
      <div className="drmmenringer" data-id="I654:1905;654:1839">
        <h1 className="text-6 lato-normal-abbey-24px" data-id="I654:1905;654:1839;653:1424">
          {text142}
        </h1>
        <div className="flex-row" data-id="an|RP32ENad">
          <div className="energi" data-id="I654:1905;654:1839;653:1416">
            <div className="frame-4" data-id="I654:1905;654:1839;653:1418">
              <div className="overlap-group1" data-id="an|G7vQ7IvH">
                <div className="text-5 valign-text-bottom" data-id="I654:1905;654:1839;653:1420">
                  {text132}
                </div>
                <div className="frame-8" data-id="I654:1905;654:1839;653:1421">
                  <div className="overlap-group" data-id="an|KIrRQ5RO">
                    <img
                      className="vector"
                      data-id="I654:1905;654:1839;653:1422"
                      src="https://anima-uploads.s3.amazonaws.com/projects/6136c58c0e55840064d54ca0/releases/6136f537acb07f15328e9ea2/img/vector-6@2x.png"
                    />
                    <div className="number" data-id="I654:1905;654:1839;653:1423">
                      {number}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-4" data-id="I654:1905;654:1839;653:1419">
                {text122}
              </p>
            </div>
          </div>
          <div className="bank" data-id="I654:1905;654:1839;653:1408">
            <div className="frame-4" data-id="I654:1905;654:1839;653:1410">
              <div className="overlap-group1" data-id="an|YiY1oGUo">
                <div className="place valign-text-bottom" data-id="I654:1905;654:1839;653:1412">
                  {place}
                </div>
                <div className="frame-8" data-id="I654:1905;654:1839;653:1413">
                  <div className="overlap-group" data-id="an|I4dBesjp">
                    <img className="vector" data-id="I654:1905;654:1839;653:1414" src={vector2} />
                    <div className="number-1" data-id="I654:1905;654:1839;653:1415">
                      {number2}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-3" data-id="I654:1905;654:1839;653:1411">
                {text112}
              </p>
            </div>
          </div>
          <div className="oppdrett" data-id="I654:1905;654:1839;653:1400">
            <div className="frame-4" data-id="I654:1905;654:1839;653:1402">
              <div className="overlap-group1" data-id="an|xm8e7tyd">
                <div className="text-2 valign-text-bottom" data-id="I654:1905;654:1839;653:1404">
                  {text10}
                </div>
                <div className="frame-8" data-id="I654:1905;654:1839;653:1405">
                  <div className="overlap-group" data-id="an|KMCi4SKx">
                    <img className="vector" data-id="I654:1905;654:1839;653:1406" src={vector3} />
                    <div className="number-2" data-id="I654:1905;654:1839;653:1407">
                      {number3}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-1" data-id="I654:1905;654:1839;653:1403">
                {text9}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const drmmenringerData = {
    text142: "Drømmenæringer:",
    text132: "Energi",
    number: "2",
    text122: "En kort beskrivelse av bedriften kan ligge her / bilde",
    place: "Bank",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/6136c58c0e55840064d54ca0/releases/6136f537acb07f15328e9ea2/img/vector-5@2x.png",
    number2: "1",
    text112: "En kort beskrivelse av bedriften kan ligge her / bilde",
    text10: "Oppdrett",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/6136c58c0e55840064d54ca0/releases/6136f537acb07f15328e9ea2/img/vector-4@2x.png",
    number3: "3",
    text9: "En kort beskrivelse av bedriften kan ligge her / bilde",
};

