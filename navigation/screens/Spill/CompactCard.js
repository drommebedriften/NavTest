import React from "react";
import "./Spill.css";


class Compactcard extends React.Component {
  render() {
    const { avatar, titleI6578976531, subtitleI65789765, amountI657897653 } = this.props;

    return (
      <div className="compactcard border-1px-mercury">
        <div className="info">
          <div className="content-1">
            <img className="avatar" src={avatar} />
            <div className="name">
              <div className="title-i6578976531 lato-normal-black-15px">{titleI6578976531}</div>
              <div className="subtitle-i65789765">{subtitleI65789765}</div>
            </div>
            <div className="clock">
              <div className="amount-i657897653-1 valign-text-middle">{amountI657897653}</div>
              <img
                className="vector-2"
                src="https://anima-uploads.s3.amazonaws.com/projects/6136c58c0e55840064d54ca0/releases/6136f4250fa209db6bc1a386/img/vector-2@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Compactcard;
