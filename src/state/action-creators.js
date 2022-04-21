import * as types from "./action-types";
import { getId } from "./helpers";
import axios from "axios";

export const addNewJob =
  ({ jobTitle, jobLink, researched, notes }) =>
  (dispatch) => {
    const payload = {
      jobTitle,
      jobLink,
      researched,
      notes,
      id: getId(),
    };
    axios.post("http://localhost:9999/api/jobs", payload).then((res) => {
      dispatch({
        type: types.ADD_NEW_JOB,
        payload: { ...payload },
      });
    });
  };
export const updateForm = ({ name, value }) => {
  return {
    type: types.UPDATE_FORM,
    payload: { name, value },
  };
};

export const updateToggle = () => {
  return {
    type: types.UPDATE_TOGGLE,
    payload: {},
  };
};

export const resetForm = () => {
  return {
    type: types.RESET_FORM,
    payload: {},
  };
};

export const fetchJobsFromApi = () => (dispatch) => {
  axios
    .get("http://localhost:9999/api/jobs")
    .then((response) => {
      const allJobsFromApi = response.data;
      dispatch({ type: types.POPULATE_JOBS, payload: allJobsFromApi });
    })
    .catch((error) => {
      console.log(error);
    });
};
