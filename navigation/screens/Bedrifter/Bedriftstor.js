import React from 'react';

class App extends React.Component {
  render() {
    return (
      <BedriftStor
        logo="https://anima-uploads.s3.amazonaws.com/projects/6136c58c0e55840064d54ca0/releases/6136cf2d79196f7985bdd4ff/img/logo@2x.png"
        text1="Greenstat"
        headerI657874653="Artikler:"
        descriptionI657874="Her kommer artikler"
        descriptionProps={bedriftStorData.descriptionProps}
        data-id="657:874:an-component-instance"
      />
    );
  }
}

export default App;

class BedriftStor extends React.Component {
  render() {
    const { logo, text1, headerI657874653, descriptionI657874, descriptionProps } = this.props;

    return (
      <div className="bedriftstor border-1px-mercury" data-id="657:874">
        <div className="info" data-id="I657:874;653:789">
          <div className="top-content" data-id="I657:874;653:790">
            <div className="header" data-id="I657:874;653:791">
              <div className="person" data-id="I657:874;653:792">
                <img className="logo" data-id="I657:874;653:793" src={logo} />
                <div className="text-1 lato-black-black-15px" data-id="I657:874;653:795">
                  {text1}
                </div>
              </div>
            </div>
            <Description data-id="I657:874;653:796:an-component-instance">{descriptionProps.children}</Description>
          </div>
          <div className="artikler" data-id="I657:874;653:798">
            <div className="header-i657874653 lato-black-black-15px" data-id="I657:874;653:805">
              {headerI657874653}
            </div>
            <div className="description-i657874 lato-normal-ship-gray-12px" data-id="I657:874;653:806">
              {descriptionI657874}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


class Description extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="description" data-id="I657:874;653:796">
        <p className="shorttext-i6578746 lato-normal-black-15px" data-id="I657:874;653:797">
          {children}
        </p>
      </div>
    );
  }
}

const descriptionData = {
    children: "Greenstat er et energiselskap som utvikler og investerer i prosjekter og selskaper som bidrar til utslippskutt og grønn verdiskapning.",
};

const bedriftStorData = {
    descriptionProps: descriptionData,
};

