import React from "react";
import "./App.css";
import JobList from "./components/jobList";
import NewJobForm from "./components/newJobForm";
function App() {
  return (
    <div className="App">
      Async Redux Project
      <NewJobForm />
      <JobList />
    </div>
  );
}

export default App;
