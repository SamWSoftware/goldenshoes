import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";
import _ from "lodash";
import validateEmails from "../../utils/validateEmails";

import formFields from "./formFields";

class SurveyForm extends Component {
  renderFields() {
    return (
      <div>
        {_.map(formFields, ({ name, label }) => (
          <Field
            key={name}
            type="text"
            name={name}
            label={label}
            component={SurveyField}
          />
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSubmitSurvey)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");

  const recip = values.recipients
    ? values.recipients.split(",").map(email => email.trim()).length
    : 0;
  if (recip > 20) {
    errors.recipients = "You can only send to 20 recipients at a time";
  }

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = `You need to enter a ${name}`;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
