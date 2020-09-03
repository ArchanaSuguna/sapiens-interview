import React from "react";
import { connect } from "react-redux";
import { highlightSelectedFilter } from "../../utils/utils";
import "./button.style.scss";

const Button = (props) => {
  const selectedFilterOption = (evt) => {
    const { name, value } = evt.target;
    highlightSelectedFilter(evt.target);
    if (name === "Launch Year") props.filterByLaunchYear(value);
    if (name === "Successful Launch") props.filterBySuccessLaunch(value);
    if (name === "Successful Landing") props.filterBySuccessLanding(value);
  };

  return (
    <>
      <button
        onClick={selectedFilterOption}
        name={props.sectionName}
        value={props.value}
      >
        {props.value}
      </button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    launchYear: state.launchYear,
    successLaunch: state.successLaunch,
    successLanding: state.successLanding
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterByLaunchYear: (launchYear) => {
      dispatch({ type: "LAUNCH_YEAR", payload: launchYear });
    },
    filterBySuccessLaunch: (successLaunch) => {
      dispatch({ type: "LAUNCH_SUCCESS", payload: successLaunch });
    },
    filterBySuccessLanding: (successLanding) => {
      dispatch({ type: "LANDING_SUCCESS", payload: successLanding });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
