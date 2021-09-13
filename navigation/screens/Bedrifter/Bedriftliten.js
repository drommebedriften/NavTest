import React from 'react';

class App extends React.Component {
  render() {
    return (
      <BedriftLiten
        avatar="https://anima-uploads.s3.amazonaws.com/projects/6136c58c0e55840064d54ca0/releases/6136cf2d79196f7985bdd4ff/img/avatar-1@2x.png"
        text1="Aibel"
        dateI65787565383="Bedriftskategori"
        data-id="657:875:an-component-instance"
      />
    );
  }
}

export default App;

class BedriftLiten extends React.Component {
  render() {
    const { avatar, text1, dateI65787565383 } = this.props;

    return (
      <div className="bedriftliten border-1px-mercury" data-id="657:875">
        <div className="bedrift" data-id="I657:875;653:829">
          <div className="top" data-id="I657:875;653:830">
            <div className="top" data-id="I657:875;653:831">
              <div className="person" data-id="I657:875;653:832">
                <img data-id="I657:875;653:833" src={avatar} />
                <div className="name-date" data-id="I657:875;653:834">
                  <div className="text-1 lato-black-black-15px" data-id="I657:875;653:835">
                    {text1}
                  </div>
                  <div className="date-i65787565383 lato-normal-ship-gray-12px" data-id="I657:875;653:836">
                    {dateI65787565383}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

