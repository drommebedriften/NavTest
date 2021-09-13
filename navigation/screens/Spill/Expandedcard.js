import React from "react";
import "./Spill.css";
import { useHistory } from "react-router-dom";


class Expandedcard extends React.Component {
  render() {
    const { expandedcard, vector2 } = this.props;

    return (
      <div className="expandedcard" style={{ backgroundImage: `url(${expandedcard})` }}>
        <div className="stats">
        </div>,
      </div>
    );

  }
}

export default Expandedcard;
