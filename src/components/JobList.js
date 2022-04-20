import React from "react";
import Job from "./Job";
import { connect } from "react-redux";
import * as actions from "../state/action-creators";

function JobList(props) {
  const { jobs } = props;
  console.log(jobs);

  return (
    <div>
      <h1>Job List</h1>
      <Job jobs={jobs} />
    </div>
  );
}

export default connect((state) => state, actions)(JobList);
