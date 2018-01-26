import React, { Component } from "react";
import { reduxForm } from "redux-form";
import SurveyForm from "./SurveyForm";
import SurveyReview from "./SurveyReview";

class SurveyNew extends Component {
  state = { review: false };

  render() {
    return (
      <div>
        {this.state.review ? (
          <SurveyReview onCancel={() => this.setState({ review: false })} />
        ) : (
          <SurveyForm onSubmitSurvey={() => this.setState({ review: true })} />
        )}
      </div>
    );
  }
}

export default reduxForm({
  form: "surveyForm"
})(SurveyNew);
