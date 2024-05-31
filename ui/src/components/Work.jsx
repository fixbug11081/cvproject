import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";
import JobGroup from "./JobGroup.jsx";

const Work = ({ handleChange }) => {
  const [inputs, setInputs] = useState(["abc"]);
  const [project, setProject] = useState(["cds"]);

  const handleAddInput = (e) => {
    e.preventDefault();
    setInputs([...inputs, "cdx"]);
  };

  const handleDeleteInput = (e, index) => {
    e.preventDefault();
    const newArray = [...inputs];
    newArray.splice(index, 1);
    setInputs(newArray);
  };
  const handleAddProject = (e) => {
    e.preventDefault();
    setProject([...project, "cdx"]);
  };

  const handleDeleteProject = (e, index) => {
    e.preventDefault();
    const newArray = [...project];
    newArray.splice(index, 1);
    setProject(newArray);
  };
  const compName = (i) => {
    return "comp_name" + i;
  };
  const designation = (i) => {
    return "designation" + i;
  };
  const duration = (i) => {
    return "duration" + i;
  };
  const projectName = (i) => {
    return "project_name" + i;
  };
  const plink = (i) => {
    return "plink" + i;
  };
  const prole = (i) => {
    return "plink" + i;
  };

  return (
    <div className="">
      <br />
      Job Information
      <br />
      <div className="row">
        <div className="col-md-4">
          <label>Company Name</label>
        </div>
        <div className="col-md-4">
          <label>Designation</label>
        </div>

        <div className="col-md-4">
          <label>Duration</label>
        </div>
      </div>
      {inputs.map((item, index) => (
        <div className="row" key={index}>
          <div className="col-md-4">
            <input
              type="text"
              name={compName(index)}
              onChange={handleChange}
              key={index}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              name={designation(index)}
              onChange={handleChange}
              key={index}
            />
          </div>
          <div className="col-md-2">
            <input
              type="text"
              name={duration(index)}
              onChange={handleChange}
              key={index}
            />
            <input type="hidden" name="jlen" value={index} />
          </div>
          <div className="col-md-2">
            &nbsp;&nbsp;
            {inputs.length > 1 && (
              <button
                className="comp-add"
                onClick={(e) => handleDeleteInput(e, index)}
              >
                -
              </button>
            )}
            {index === inputs.length - 1 && (
              <button className="comp-add" onClick={(e) => handleAddInput(e)}>
                +
              </button>
            )}
          </div>
        </div>
      ))}
      <hr />
      <br />
      Project Information
      <br />
      <div className="row">
        <div className="col-md-4">
          <label>Project Name</label>
        </div>
        <div className="col-md-4">
          <label>Project Link</label>
        </div>

        <div className="col-md-4">
          <label>My Role</label>
        </div>
      </div>
      {project.map((itm, indx) => (
        <div className="row" key={indx}>
          <div className="col-md-4">
            <input
              type="text"
              name={projectName(indx)}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <input type="text" name={plink(indx)} onChange={handleChange} />
          </div>
          <div className="col-md-4">
            <input type="text" name={prole(indx)} onChange={handleChange} />
            <input type="hidden" name="plen" value={indx} />
          </div>
          <div className="col-md-2">
            {project.length > 1 && (
              <button
                className="project-add"
                onClick={(e) => handleDeleteProject(e, indx)}
              >
                -
              </button>
            )}
            {indx === project.length - 1 && (
              <button
                className="project-add"
                onClick={(e) => handleAddProject(e)}
              >
                +
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
