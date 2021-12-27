import React, { Component } from "react";
import ProgressBarPart from "./ProgressBarPart";
import "./ProgressBar.style.scss";

export default class ProgressBar extends Component {
  render() {
    const { allStages, currentStage, titles } = this.props;
    const currentIndex = allStages.indexOf(currentStage);

    return (
      <div className="progress-bar">
        {allStages.map((stage, idx) => {
          const active = idx <= currentIndex;
          const done = idx < currentIndex;

          return (
            <ProgressBarPart
              key={stage}
              title={titles[idx]}
              withCircle={idx !== allStages.length - 1}
              active={active}
              done={done}
              index={idx + 1}
            />
          );
        })}
      </div>
    );
  }
}
