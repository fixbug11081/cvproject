import React from "react";
import { GrAdd } from "react-icons/gr";
const ProjectGroup = ({ handleChange }) => {
  let addProject = () => {
    console.log("ajeet");
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <input type="text" name="project_name" onChange={handleChange} />
        </div>

        <div className="col-md-4">
          <input type="text" name="plink" onChange={handleChange} />
        </div>
        <div className="col-md-4">
          <input type="text" name="pimg" onChange={handleChange} />
        </div>
        <div>
          <button className="comp-add" onClick={addProject}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectGroup;
