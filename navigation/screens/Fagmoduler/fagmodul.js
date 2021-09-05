import React from 'react';

class App extends React.Component {
  render() {
    return (
      <Bedriftsbeskrivelse122
        person2Props={bedriftsbeskrivelse122Data.person2Props}
        description2Props={bedriftsbeskrivelse122Data.description2Props}
        data-id="293:1032:an-component-instance"
      />
    );
  }
}

export default App;

class Bedriftsbeskrivelse122 extends React.Component {
  render() {
    const { person2Props, description2Props } = this.props;

    return (
      <div className="bedriftsbeskrivelse-1 border-1px-mercury" data-id="293:1032">
        <div className="info" data-id="293:1033">
          <div className="top-content" data-id="293:1034">
            <Person2
              nameDateProps={person2Props.nameDateProps}
              data-id="293:1036:an-component-instance"
            />
            <Description2 spanText2={description2Props.spanText2} data-id="293:1040:an-component-instance" />
          </div>
        </div>
      </div>
    );
  }
}


class Person2 extends React.Component {
  render() {
    const { avatar, nameDateProps } = this.props;

    return (
      <div className="person" data-id="293:1036">
        <img className="avatar" data-id="293:1037" src={avatar} />
        <NameDate data-id="293:1038:an-component-instance">{nameDateProps.children}</NameDate>
      </div>
    );
  }
}


class NameDate extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="name-date" data-id="293:1038">
        <div className="schibsted lato-black-black-15px" data-id="293:1039">
          {children}
        </div>
      </div>
    );
  }
}


class Description2 extends React.Component {
  render() {
    const { spanText2 } = this.props;

    return (
      <div className="description" data-id="293:1040">
        <p className="text-1 lato-bold-black-14px" data-id="293:1041">
          <span className="span0 lato-bold-black-14px">
            Her kan en beskrivelse av modulen komme
            <br />
          </span>
          <span className="span1">{spanText2}</span>
        </p>
      </div>
    );
  }
}

const nameDateData = {
    children: "Havvind",
};

const person2Data = {
    avatar: "https://anima-uploads.s3.amazonaws.com/projects/61322634741f3ccfdeac659e/releases/613227444c3b7bf7ff9c16cb/img/avatar-16@2x.png",
    nameDateProps: nameDateData,
};

const description2Data = {
    spanText2: <><br />trykk her for å spille </>,
};

const bedriftsbeskrivelse122Data = {
    person2Props: person2Data,
    description2Props: description2Data,
};

