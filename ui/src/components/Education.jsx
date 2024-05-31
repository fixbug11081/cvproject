import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";

const Education = ({ handleChange }) => {
  return (
    <div>
      <br />
      Highest Qualification
      <br />
      <div className="row">
        <div className="col-md-4">
          <label>Degree</label>
          <input type="text" name="degree" onChange={handleChange}></input>
        </div>
        <div className="col-md-4">
          <label>College</label>
          <input type="text" name="college" onChange={handleChange}></input>
        </div>
        <div className="col-md-4">
          <label>Passing out year</label>
          <input type="text" name="year" onChange={handleChange}></input>
        </div>
      </div>
      <br />
      Soft Skills
      <div className="col-md-6">
        <input
          className="form-control"
          type="text"
          placeholder="skill1"
          name="skill1"
          onChange={handleChange}
        ></input>
      </div>
      <div className="col-md-6">
        <input
          className="form-control"
          type="text"
          placeholder="skill2"
          name="skill2"
          onChange={handleChange}
        ></input>
      </div>
      <div className="col-md-6">
        <input
          className="form-control"
          type="text"
          placeholder="skill3"
          name="skill3"
          onChange={handleChange}
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
            name="proficiency1"
            placeholder="proficiency"
            onChange={handleChange}
          ></input>
        </div>
        <div className="col-md-2">
          <label>Ratings(1-5)</label>
          <input
            className="form-control"
            type="text"
            name="rating1"
            placeholder="ratings"
            onChange={handleChange}
          ></input>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <input
            className="form-control"
            type="text"
            name="proficiency2"
            placeholder="proficiency"
            onChange={handleChange}
          ></input>
        </div>
        <div className="col-md-2">
          <input
            className="form-control"
            type="text"
            name="rating2"
            placeholder="ratings"
            onChange={handleChange}
          ></input>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <input
            className="form-control"
            type="text"
            name="proficiency3"
            placeholder="proficiency"
            onChange={handleChange}
          ></input>
        </div>
        <div className="col-md-2">
          <input
            className="form-control"
            type="text"
            name="rating3"
            placeholder="ratings"
            onChange={handleChange}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Education;
