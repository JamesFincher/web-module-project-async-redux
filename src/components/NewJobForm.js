import React from "react";

function NewJobForm() {
  const submitHandle = (e) => {
    e.preventDefault();
    console.log("clicked");
  };
  return (
    <div>
      <h1>New Job Form</h1>
      <form onSubmit={submitHandle}>
        <label>
          Job Title:
          <input type="text" name="jobTitle" />
        </label>
        <label>
          Job Link:
          <input type="text" name="jobLink" />
        </label>
        <label>
          Researched:
          <input type="checkbox" name="researched" />
        </label>
        <label>
          Notes:
          <input type="text" name="notes" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default NewJobForm;
