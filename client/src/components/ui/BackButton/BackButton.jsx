import React from "react";
import { withRouter } from "react-router-dom";
import "./BackButton.css";

const BackButton = ({ history, locationSymbol }) => {
  return (
    <div onClick={() => goBack(history)}>
      <i className="material-icons">arrow_back</i>
      {locationSymbol ? <i className="material-icons">{locationSymbol}</i> : ""}
    </div>
  );
};

function goBack(history) {
  history.goBack();
}

export default withRouter(BackButton);
