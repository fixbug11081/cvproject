import React, { useState } from "react";

const Personal = ({ handleChange }) => {
  return (
    <div>
      <div className="col-md-6">
        <label>Profile Image</label>

        <input
          name="person_img"
          className="form-control"
          type="file"
          onChange={handleChange}
        />

        <img src="" />
      </div>
      <br />
      <div className="col-md-6">
        <label>Name</label>
        <input
          className="form-control"
          type="text"
          name="name"
          placeholder="name"
          onChange={handleChange}
        ></input>
      </div>
      <br />
      <div className="col-md-6">
        <label>Address</label>
        <input
          className="form-control"
          type="text"
          placeholder="address"
          name="address"
          onChange={handleChange}
        ></input>
      </div>
      <br />
      <div className="col-md-6">
        <label>Email Id</label>
        <input
          className="form-control"
          type="text"
          placeholder="email"
          name="email"
          onChange={handleChange}
        ></input>
      </div>
      <br />
      <div className="col-md-6">
        <label>Mobile No.</label>
        <input
          className="form-control"
          type="text"
          placeholder="mobile"
          name="mobile"
          onChange={handleChange}
        ></input>
      </div>
      <br />
      <div className="col-md-6">
        <label>Current Designation</label>
        <input
          className="form-control"
          type="text"
          name="curr_designation"
          placeholder="designation"
          onChange={handleChange}
        ></input>
      </div>
      <br />
      <div className="col-md-6">
        <label>Current Company</label>
        <input
          className="form-control"
          type="text"
          name="curr_comp"
          placeholder="name"
          onChange={handleChange}
        ></input>
      </div>
      <br />
      <div className="col-md-6">
        <label>Current Company Url</label>
        <input
          className="form-control"
          type="text"
          name="comp_url"
          placeholder="url"
          onChange={handleChange}
        ></input>
      </div>
      <br />
      <div className="col-md-6">
        <label>One Line Description</label>
        <input
          className="form-control"
          type="text"
          name="description"
          placeholder="description"
          onChange={handleChange}
        ></input>
      </div>
      <br />
      <div className="col-md-6">
        <label>CTC</label>
        <input
          className="form-control"
          type="text"
          placeholder="ctc"
          name="ctc"
          onChange={handleChange}
        ></input>
      </div>
      <br />
      <div className="col-md-6">
        <label>ETC</label>
        <input
          className="form-control"
          type="text"
          placeholder="etc"
          name="etc"
          onChange={handleChange}
        ></input>
      </div>
      <div className="col-md-6">
        <label>LinkedIn Url</label>
        <input
          className="form-control"
          type="text"
          placeholder="url"
          name="lurl"
          onChange={handleChange}
        ></input>
      </div>
      <br />
      <div className="col-md-6">
        <label>Git Url</label>
        <input
          className="form-control"
          type="text"
          placeholder="url"
          name="gurl"
          onChange={handleChange}
        ></input>
      </div>
      <br />
      <div className="col-md-6">
        <label>Youtube Url</label>
        <input
          className="form-control"
          type="text"
          placeholder="url"
          name="yurl"
          onChange={handleChange}
        ></input>
      </div>
      <div className="col-md-6">
        <label>Hobbies</label>
        <input
          className="form-control"
          type="text"
          placeholder="hobby"
          name="hobby"
          onChange={handleChange}
        ></input>
      </div>
    </div>
  );
};

export default Personal;
