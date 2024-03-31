import React from "react";
import { GrAdd } from "react-icons/gr";
import JobGroup from "./JobGroup.jsx";

const Work = () => {
  return (
    <div>
      <br />
      <h2>Jobs Information</h2>
      <br />
      <div className="row">
        <div className="col-md-4">
          <label>Company Name</label>
          <input type="text" name="comp_name" />
        </div>
        <div className="col-md-4">
          <label>Designation</label>
          <input type="text" name="designation" />
        </div>
        <div className="col-md-4">
          <label>Duration</label>
          <input type="text" name="duration" />
        </div>
        <div>
          <GrAdd className="comp-add" />
        </div>
      </div>
      <JobGroup />
      <br />
      <h2>Projects</h2>
      <br />
      <div className="row">
        <div className="col-md-4">
          <label>Project Name</label>
          <input type="text" name="project_name" />
        </div>

        <div className="col-md-4">
          <label>Project Link</label>
          <input type="text" name="plink" />
        </div>
        <div className="col-md-4">
          <label>My Role</label>
          <input type="text" name="prole" />
        </div>
        <div>
          <GrAdd className="comp-add" />
        </div>
      </div>
    </div>
  );
};

export default Work;
