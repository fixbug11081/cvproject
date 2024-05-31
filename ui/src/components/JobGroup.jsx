import { useState } from "react";
import React from "react";
import { GrAdd } from "react-icons/gr";

const JobGroup = ({ handleChange }) => {
  const [inputs, setInputs] = useState([{ company: "" }]);

  const addComp = (event) => {
    event.preventDefault();
    setInputs([...inputs, { company: "" }]);
  };
  return inputs.map((item, index) => {
    <div>
      <div className="row">
        <div className="col-md-4">
          <input
            type="text"
            name="comp_name"
            onChange={handleChange}
            key={index}
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            name="designation"
            onChange={handleChange}
            key={index}
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            name="duration"
            onChange={handleChange}
            key={index}
          />
        </div>
        <div>
          <button className="comp-add" onClick={(e) => addComp(e)}>
            +
          </button>
        </div>
      </div>
    </div>;
  });
};

export default JobGroup;
