import React from "react";
import Compactcard from "./Compactcard";

class CompactView extends React.Component {
  render() {
    const { compactcardProps } = this.props;

    return (
      <div className="compact-view">
        <Compactcard
          avatar={compactcardProps.avatar}
          titleI6578976531={compactcardProps.titleI6578976531}
          subtitleI65789765={compactcardProps.subtitleI65789765}
          amountI657897653={compactcardProps.amountI657897653}
        />
      </div>
    );
  }
}

export default CompactView;
