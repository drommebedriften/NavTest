import React from 'react';
import "./Feed.css";


class App extends React.Component {
  render() {
    return (
      <Feedscroll
        fagmodulkortProps={feedscrollData.fagmodulkortProps}
        bedriftsmodulkortProps={feedscrollData.bedriftsmodulkortProps}
        artikkelkortProps={feedscrollData.artikkelkortProps}
        data-id="I657:996;653:1670:an-component-instance"
      />
    );
  }
}

export default App;

class Feedscroll extends React.Component {
  render() {
    const { fagmodulkortProps, bedriftsmodulkortProps, artikkelkortProps } = this.props;

    return (
      <div className="feedscroll" data-id="I657:996;653:1670">
        <Fagmodulkort
          fagmodulkort={fagmodulkortProps.fagmodulkort}
          timeI65316706531={fagmodulkortProps.timeI65316706531}
          data-id="I657:996;653:1670;653:1636:an-component-instance"
        />
        <Bedriftsmodulkort
          bedriftsmodulkort={bedriftsmodulkortProps.bedriftsmodulkort}
          countProps={bedriftsmodulkortProps.countProps}
          data-id="I657:996;653:1670;653:1637:an-component-instance"
        />
        <Artikkelkort
          artikkelkort={artikkelkortProps.artikkelkort}
          amountI6531670653={artikkelkortProps.amountI6531670653}
          likesI6531670653={artikkelkortProps.likesI6531670653}
          text22={artikkelkortProps.text22}
          text1={artikkelkortProps.text1}
          data-id="I657:996;653:1670;653:1638:an-component-instance"
        />
      </div>
    );
  }
}


class Fagmodulkort extends React.Component {
  render() {
    const { fagmodulkort, timeI65316706531 } = this.props;

    return (
      <div
        className="fagmodulkort border-1px-mercury"
        style={{ backgroundImage: `url(${fagmodulkort})` }}
        data-id="I657:996;653:1670;653:1636"
      >
        <Count data-id="I657:996;653:1670;653:1636;653:1598:an-component-instance" />
        <div className="tittel-i657996653" data-id="I657:996;653:1670;653:1636;653:1608">
          {timeI65316706531}
        </div>
      </div>
    );
  }
}


class Count extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`count ${className || ""}`} data-id="I657:996;653:1670;653:1636;653:1598">
        <div className="flex-col lato-normal-white-13px" data-id="an|qGSc5lDh">
         
        </div>
      </div>
    );
  }
}


class Bedriftsmodulkort extends React.Component {
  render() {
    const { bedriftsmodulkort, countProps } = this.props;

    return (
      <div
        className="bedriftsmodulkort"
        style={{ backgroundImage: `url(${bedriftsmodulkort})` }}
        data-id="I657:996;653:1670;653:1637"
      >
      </div>
    );
  }
}


class Artikkelkort extends React.Component {
  render() {
    const { artikkelkort, amountI6531670653, likesI6531670653, text22, text1 } = this.props;

    return (
      <div
        className="artikkelkort border-1px-mercury"
        style={{ backgroundImage: `url(${artikkelkort})` }}
        data-id="I657:996;653:1670;653:1638"
      >
         
         

          </div>

    );
  }
}

const fagmodulkortData = {
    fagmodulkort: "https://anima-uploads.s3.amazonaws.com/projects/6136c58c0e55840064d54ca0/releases/6136c5db173bee6db2de1bdf/img/image@2x.png",
    timeI65316706531: <>Spill <br />Innføring i Havvind</>,
};

const count2Data = {
    className: "count-1",
};

const bedriftsmodulkortData = {
    bedriftsmodulkort: "https://anima-uploads.s3.amazonaws.com/projects/6136c58c0e55840064d54ca0/releases/6136c5db173bee6db2de1bdf/img/img@2x.png",
    countProps: count2Data,
};

const artikkelkortData = {
    artikkelkort: "https://anima-uploads.s3.amazonaws.com/projects/6136c58c0e55840064d54ca0/releases/6136c5db173bee6db2de1bdf/img/img-1@2x.png",
    amountI6531670653: "2min",
    likesI6531670653: "473",
    text22: "KATEGORI - BEDRIFT - TAGS",
    text1: "People skills blir viktigere når robotene kommer",
};

const feedscrollData = {
    fagmodulkortProps: fagmodulkortData,
    bedriftsmodulkortProps: bedriftsmodulkortData,
    artikkelkortProps: artikkelkortData,
};

