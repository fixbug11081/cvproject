import React from "react";
import { GrAdd } from "react-icons/gr";
const JobGroup = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <input type="text" name="comp_name" />
        </div>
        <div className="col-md-4">
          <input type="text" name="designation" />
        </div>
        <div className="col-md-4">
          <input type="text" name="duration" />
        </div>
        <div>
          <GrAdd className="comp-add" />
        </div>
      </div>
    </div>
  );
};

export default JobGroup;
