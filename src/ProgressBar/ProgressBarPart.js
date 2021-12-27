import React, { Component } from "react";

export default class ProgressBarPart extends Component {
  render() {
    const { title, withCircle, active, done, index } = this.props;

    return (
      <React.Fragment>
        <div className={`pb-part pb-line ${active ? "active" : ""}`} />

        {withCircle && (
          <div className={`pb-part pb-circle ${active ? "active" : ""}`}>
            {done ? "✓" : index}
            <div className="circle-title">{title}</div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
