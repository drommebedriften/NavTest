import React from "react";
import Bedrifter2 from "./Bedrifter2";

class Bedrifter extends React.Component {
  render() {
    const { bedrifter2Props } = this.props;

    return (
        <div className="content-screen">
            <Bedrifter2
              bedriftStorProps={bedrifter2Props.bedriftStorProps}
              bedriftLitenProps={bedrifter2Props.bedriftLitenProps}
            />
          
        </div>
    );
  }
}

export default Bedrifter;
