import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import _ from "lodash";
import * as actions from "../../actions";
import { withRouter } from "react-router-dom";

const SurveyReview = ({
  onCancel,
  formValues,
  submitSurvey,
  history,
  credits
}) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  const noCredit = () => {
    return (
      <div className="red-text right hidden" id="noCredit">
        You need to have credits to send a survey!
      </div>
    );
  };

  return (
    <div id="review">
      <h5>Please confirm your details</h5>
      {reviewFields}
      <div>
        <button
          className=" white-text yellow darken-3 btn-flat"
          onClick={onCancel}
        >
          Back
        </button>
        <button
          onClick={() => submitSurvey(formValues, history)}
          className="white-text green btn-flat right"
          disabled={credits === 0}
        >
          Send Survey <i className="material-icons right">email</i>
        </button>
      </div>

      {credits === 0 ? noCredit() : ""}
    </div>
  );
};

function mapStateToProps(state) {
  console.log(state);
  return {
    formValues: state.form.surveyForm.values,
    credits: state.auth.credits
  };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));
