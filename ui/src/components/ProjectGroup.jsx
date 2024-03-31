import React from "react";
import { GrAdd } from "react-icons/gr";
const ProjectGroup = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <input type="text" name="project_name" />
        </div>

        <div className="col-md-4">
          <input type="text" name="plink" />
        </div>
        <div className="col-md-4">
          <input type="text" name="pimg" />
        </div>
        <div>
          <GrAdd className="comp-add" />
        </div>
      </div>
    </div>
  );
};

export default ProjectGroup;
