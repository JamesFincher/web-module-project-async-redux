import React from "react";

function Job(props) {
  const { jobs } = props;
  console.log(jobs);
  return jobs.map((job) => (
    <div key={job.id}>
      <h4>Title: {job.jobTitle}</h4>
      <a href={job.JobLink}>Source</a>
      <p>Notes: {job.notes}</p>
      {job.researched ? <p>Researched</p> : <p>Not Researched</p>}
    </div>
  ));
}

export default Job;
