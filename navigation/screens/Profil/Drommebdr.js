import React from 'react';

class App extends React.Component {
  render() {
    return (
      <Drmmebedrifter
        text16="Drømmebedrifter"
        reactIconsMdMdlock="https://anima-uploads.s3.amazonaws.com/projects/6136c58c0e55840064d54ca0/releases/6136f537acb07f15328e9ea2/img/react-icons-md-mdlock@2x.png"
        text15="Nå level 30 for å se dine drømmebedrifter"
        data-id="I654:1905;654:1840:an-component-instance"
      />
    );
  }
}

export default App;

class Drmmebedrifter extends React.Component {
  render() {
    const { text16, reactIconsMdMdlock, text15 } = this.props;

    return (
      <div className="drmmebedrifter" data-id="I654:1905;654:1840">
        <h1 className="text-2 lato-normal-abbey-24px" data-id="I654:1905;654:1840;653:1398">
          {text16}
        </h1>
        <div className="bank" data-id="I654:1905;654:1840;653:1393">
          <div className="lst-drommebedrift" data-id="I654:1905;654:1840;653:1395">
            <img className="react-iconsmd-md-lock" data-id="I654:1905;654:1840;653:1397" src={reactIconsMdMdlock} />
            <p className="text-1 valign-text-middle" data-id="I654:1905;654:1840;653:1396">
              {text15}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

