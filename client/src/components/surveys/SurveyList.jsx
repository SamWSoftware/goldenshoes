import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions/index";

class SurveyList extends Component {
  componentWillMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    console.log(this.props.surveys);
    // if (this.props.surveys)
    if (!this.props.surveys.retrieved) {
      return (
        <div>
          <h4>Loading your surveys.</h4>
        </div>
      );
    }
    if (this.props.surveys.length === 0) {
      return (
        <div className="center-align">
          <h2>You have no surveys!</h2>
          <p>
            To create a new survey, click the plus in the bottom right of this
            page.
          </p>
        </div>
      );
    }
    return this.props.surveys.list.reverse().map((survey, k) => {
      return (
        <div className="card" key={k}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}{" "}
            </p>
          </div>
          <div className="card-action">
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
