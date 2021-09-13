import React from 'react';

class App extends React.Component {
  render() {
    return (
      <Bedrifthighlight
        avatar="https://anima-uploads.s3.amazonaws.com/projects/6136c58c0e55840064d54ca0/releases/6136c5db173bee6db2de1bdf/img/avatar-1@2x.png"
        text1="DNB"
        link="https://anima-uploads.s3.amazonaws.com/projects/6136c58c0e55840064d54ca0/releases/6136c5db173bee6db2de1bdf/img/link-2@2x.png"
        link2="https://anima-uploads.s3.amazonaws.com/projects/6136c58c0e55840064d54ca0/releases/6136c5db173bee6db2de1bdf/img/link-2@2x.png"
        descriptionProps={bedrifthighlightData.descriptionProps}
        data-id="I657:996;653:1672:an-component-instance"
      />
    );
  }
}

export default App;

class Bedrifthighlight extends React.Component {
  render() {
    const { avatar, text1, link, link2, descriptionProps } = this.props;

    return (
      <div className="bedrifthighlight" data-id="I657:996;653:1672">
        <div className="bedrifthighlight-1" data-id="I657:996;653:1672;653:719">
          <div className="top-content" data-id="I657:996;653:1672;653:720">
            <div className="top-line" data-id="I657:996;653:1672;653:721">
              <div className="person" data-id="I657:996;653:1672;653:722">
                <img className="avatar" data-id="I657:996;653:1672;653:723" src={avatar} />
                <div className="name-date" data-id="I657:996;653:1672;653:724">
                  <div className="text-1 lato-black-black-15px" data-id="I657:996;653:1672;653:725">
                    {text1}
                  </div>
                </div>
              </div>
            </div>
            <Description data-id="I657:996;653:1672;653:726:an-component-instance">
              {descriptionProps.children}
            </Description>
          </div>
          <div className="linker" data-id="I657:996;653:1672;653:728">
            <img className="link" data-id="I657:996;653:1672;653:731" src={link} />
            <img className="link-2" data-id="I657:996;653:1672;653:730" src={link2} />
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
      <div className="description" data-id="I657:996;653:1672;653:726">
        <p className="text-20 lato-normal-black-15px" data-id="I657:996;653:1672;653:727">
          {children}
        </p>
      </div>
    );
  }
}

const descriptionData = {
    children: "Verdensøkonomien går over til å driftes i skyen. Informasjon, databehandling og analyser er avgjørende for at dette skal skje. Lær mer om Big Data i våre fagmoduler",
};

const bedrifthighlightData = {
    descriptionProps: descriptionData,
};

