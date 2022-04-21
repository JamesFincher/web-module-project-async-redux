import React from "react";
import { connect } from "react-redux";
import * as actions from "../state/action-creators";

function NewJobForm(props) {
  const { form } = props;
  const submitHandle = (e) => {
    console.log(e);
    e.preventDefault();
    const payload = {
      jobTitle: form.jobTitle,
      jobLink: form.jobLink,
      researched: form.researched,
      notes: form.notes,
    };
    props.addNewJob(payload);
    props.resetForm();
  };
  const onToggle = (e) => {
    props.updateToggle();
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    props.updateForm({ name, value });
  };

  return (
    <div>
      <h1>New Job Form</h1>
      <form onSubmit={submitHandle}>
        <label>
          Job Title:
          <input
            value={form.jobTitle}
            onChange={onChange}
            name="jobTitle"
            type="text"
          />
        </label>
        <label>
          Job Link:
          <input
            type="text"
            name="jobLink"
            onChange={onChange}
            value={form.link}
          />
        </label>
        <label>
          Researched:
          <input
            type="checkbox"
            name="researched"
            onClick={onToggle}
            value={form.researched}
          />
        </label>
        <label>
          Notes:
          <input type="text" name="notes" onChange={onChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    form: state.form,
  };
};

export default connect(mapStateToProps, actions)(NewJobForm);
