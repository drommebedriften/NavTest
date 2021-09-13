import React from "react";
import BedriftStor from "./BedriftStor";
import BedriftLiten from "./BedriftLiten";

class Bedrifter2 extends React.Component {
  render() {
    const { bedriftStorProps, bedriftLitenProps } = this.props;

    return (
      <div className="content">
        <div className="content">
          <BedriftStor
            logo={bedriftStorProps.logo}
            text1={bedriftStorProps.text1}
            headerI657874653={bedriftStorProps.headerI657874653}
            descriptionI657874={bedriftStorProps.descriptionI657874}
            descriptionProps={bedriftStorProps.descriptionProps}
          />
          <BedriftLiten
            avatar={bedriftLitenProps.avatar}
            text2={bedriftLitenProps.text2}
            dateI65787565383={bedriftLitenProps.dateI65787565383}
          />
          <BedriftLiten></BedriftLiten>
          <BedriftLiten></BedriftLiten>
          <BedriftLiten></BedriftLiten>
          <BedriftLiten></BedriftLiten>
          <BedriftLiten></BedriftLiten>
          <BedriftLiten></BedriftLiten>
          <BedriftLiten></BedriftLiten>
          <BedriftLiten></BedriftLiten>

        </div>
      </div>
    );
  }
}

export default Bedrifter2;
