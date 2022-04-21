import React, { useEffect } from "react";
import Job from "./Job";
import { connect } from "react-redux";
import * as actions from "../state/action-creators";

function JobList(props) {
  const { jobs } = props;
  console.log(jobs);
  useEffect(() => {
    props.fetchJobsFromApi();
    console.log("Jobs after fetching from api: ", jobs);
  }, []);
  return (
    <div>
      <h1>Job List</h1>
      {jobs.map((uj) => {
        return <Job key={uj.id} job={uj} />;
      })}
    </div>
  );
}

export default connect((state) => state, actions)(JobList);
