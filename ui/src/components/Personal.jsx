import React from "react";

const Personal = () => {
  return (
    <div>
      <div className="col-md-6">
        <label>Profile Image</label>
        <input name="person_img" className="form-control" type="file" />
      </div>
      <br />
      <div className="col-md-6">
        <label>Name</label>
        <input
          className="form-control"
          type="text"
          name="name"
          placeholder="name"
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
        ></input>
      </div>
      <div className="col-md-6">
        <label>LinkedIn Url</label>
        <input
          className="form-control"
          type="text"
          placeholder="url"
          name="lurl"
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
        ></input>
      </div>
      <div className="col-md-6">
        <label>Hobbies</label>
        <input
          className="form-control"
          type="text"
          placeholder="hobby"
          name="hobby"
        ></input>
      </div>
    </div>
  );
};

export default Personal;
