import React from "react";

class Description extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="description">
        <p className="shorttext-i6578746 lato-normal-black-15px">{children}</p>
      </div>
    );
  }
}

export default Description;
