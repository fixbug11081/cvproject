import React from "react";
import { GrAdd } from "react-icons/gr";

const Education = () => {
  return (
    <div>
      <br />
      Highest Qualification
      <br />
      <div class="row">
        <div class="col-md-4">
          <label>Degree</label>
          <input type="text" name="degree"></input>
        </div>
        <div class="col-md-4">
          <label>College</label>
          <input type="text" name="college"></input>
        </div>
        <div class="col-md-4">
          <label>Passing out year</label>
          <input type="text" name="year"></input>
        </div>
      </div>
      <br />
      Soft Skills
      <div className="col-md-6">
        <label>Skill1</label>
        <input
          className="form-control"
          type="text"
          placeholder="skill1"
          name="skill1"
        ></input>
      </div>
      <div className="col-md-6">
        <label>Skill2</label>
        <input
          className="form-control"
          type="text"
          placeholder="skill2"
          name="skill2"
        ></input>
      </div>
      <div className="col-md-6">
        <label>Skill3</label>
        <input
          className="form-control"
          type="text"
          placeholder="skill3"
          name="skill3"
        ></input>
      </div>
      <br />
      Technical Proficieny
      <div className="row">
        <div className="col-md-4">
          <label>Proficiency</label>
          <input
            className="form-control"
            type="text"
            name="proficiency"
            placeholder="proficiency"
          ></input>
        </div>

        <div className="col-md-2">
          <label>Ratings(1-5)</label>
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

export default Education;
