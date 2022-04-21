import * as types from "./action-types";
import { getId } from "./helpers";
import axios from "axios";

export const addNewJob = ({ jobTitle, jobLink, researched, notes }) => {
  return {
    type: types.ADD_NEW_JOB,
    payload: { jobTitle, id: getId(), jobLink, researched, notes },
  };
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
