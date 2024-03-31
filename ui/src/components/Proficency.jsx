import React from "react";

const Proficency = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <input
            className="form-control"
            type="text"
            name="proficiency"
            placeholder="proficiency"
          ></input>
        </div>

        <div className="col-md-2">
          <input
            className="form-control"
            type="text"
            name="rating"
            placeholder="ratings"
          ></input>
        </div>
        <div>
          <GrAdd className="tech-add" />
        </div>
      </div>
    </div>
  );
};

export default Proficency;
