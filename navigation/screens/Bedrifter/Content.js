import React from "react";
import BedriftLiten from "./BedriftLiten"
import BedriftStor from "./BedriftStor"

class Content extends React.Component {
  render() {
    const { expandedcardProps, compactViewProps } = this.props;

    return (
      <div className="Content">
        <BedriftLiten></BedriftLiten>
      </div>
    );
  }
}

export default Content;
