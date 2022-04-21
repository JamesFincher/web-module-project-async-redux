import { combineReducers } from "redux";
import * as types from "./action-types";
import axios from "axios";

const initialJobs = [
  {
    jobTitle: "Sample Title",
    id: 100,
    JobLink: "http://www.google.com",
    researched: true,
    notes: "These are some sample notes",
  },
];

const initialForm = {
  jobTitle: "",
  jobLink: "",
  researched: false,
  notes: "",
};

function jobs(jobsStateSlice = initialJobs, action) {
  switch (action.type) {
    case types.ADD_NEW_JOB: {
      return [...jobsStateSlice, action.payload];
    }
    case types.POPULATE_JOBS: {
      return action.payload;
    }
    default:
      return jobsStateSlice;
  }
}

function form(formStateSlice = initialForm, action) {
  switch (action.type) {
    case types.UPDATE_FORM: {
      const { name, value } = action.payload;
      return { ...formStateSlice, [name]: value };
    }
    case types.UPDATE_TOGGLE: {
      return { ...formStateSlice, researched: !formStateSlice.researched };
    }
    case types.RESET_FORM: {
      return { ...initialForm };
    }
    default:
      return formStateSlice;
  }
}

export default combineReducers({
  jobs,
  form,
});
