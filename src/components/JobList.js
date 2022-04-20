import React from "react";
import Job from "./Job";
import { connect } from "react-redux";
import * as actions from "../state/action-creators";

function JobList(props) {
  return <div>list of jobs</div>;
}

export default connect((state) => state, actions)(JobList);
