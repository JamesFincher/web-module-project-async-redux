import React from "react";
import { connect } from "react-redux";

function Job(props) {
  const { job, key } = props;
  return (
    <div id={key}>
      <h2>{job.jobTitle}</h2>
      <p>{job.jobLink}</p>
      <p>{job.researched}</p>
      <p>{job.notes}</p>
    </div>
  );
}

export default connect((state) => state, {})(Job);
