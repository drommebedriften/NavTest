import React from "react";
import Expandedcard from "./Expandedcard";
import CompactView from "./CompactView";
import "./Spill.css";

class Content extends React.Component {
  render() {
    const { expandedcardProps, compactViewProps } = this.props;

    return (
      <div className="spillcontent">
        <Expandedcard
          expandedcard={expandedcardProps.expandedcard}
          likesI6578976531={expandedcardProps.likesI6578976531}
          amountI657897653={expandedcardProps.amountI657897653}
          vector2={expandedcardProps.vector2}
        />
        <CompactView compactcardProps={compactViewProps.compactcardProps} />
        <CompactView compactcardProps={compactViewProps.compactcardProps} />
        <CompactView compactcardProps={compactViewProps.compactcardProps} />
        <CompactView compactcardProps={compactViewProps.compactcardProps} />
        <CompactView compactcardProps={compactViewProps.compactcardProps} />

        <CompactView compactcardProps={compactViewProps.compactcardProps} />
        </div>
    );
  }
}

export default Content;
