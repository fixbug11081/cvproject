import React, { useEffect, useState } from "react";
import "../../src/App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Personal from "./Personal.jsx";
import Education from "./Education.jsx";
import Work from "./Work.jsx";
import Cv from "./Cv.jsx";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import qs from "qs";

const Form = () => {
  let msg, filepath, fileObj;
  const navigateTo = useNavigate();
  const [inputs, setInputs] = useState({});
  const [pic, setPic] = useState(null);
  const [snap, setSnap] = useState("");

  const handleChange = async (event) => {
    let { name, value } = event.target;
    if (name == "person_img") {
      const uri = URL.createObjectURL(event.target.files[0]);
      setPic(uri);
      uploadfile(event);
    } else {
      setInputs((values) => ({ ...values, [name]: value }));
    }
  };

  const uploadfile = async (event) => {
    let file = event.target.files[0];
    let data = new FormData();
    data.append("file", file);
    await Axios.post("http://localhost:5010/upload", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((response) => {
      if (response.data.statusCode == 200) {
        msg = response.data.message;
      } else {
        msg = response.data.message;
      }
      alert(msg);
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await Axios.post("http://localhost:5010/save", inputs).then((response) => {
      if (response.data.statusCode == 200) {
        msg = response.data.message;
      } else {
        msg = response.data.message;
      }
      alert(msg);
    });

    await Axios.get("http://localhost:5010/getcv", {
      params: { email: inputs.email },
    }).then((response) => {
      if (response.status == 200) {
        console.log(response.data.data);
        navigateTo("/cv", { state: response.data.data });
      } else {
        alert("No response");
      }
    });
  };
  return (
    <>
      <div className="fluid-container">
        <form onSubmit={handleSubmit}>
          <h1>CV Form</h1>
          <img src={pic} height="150" width="150" />
          <Tabs forceRenderTabPanel={true}>
            <TabList>
              <Tab>Personal Information</Tab>
              <Tab>Education</Tab>
              <Tab>Work Experience</Tab>
            </TabList>
            <TabPanel>
              <Personal handleChange={handleChange} />
            </TabPanel>
            <TabPanel>
              <Education handleChange={handleChange} />
            </TabPanel>
            <TabPanel>
              <Work handleChange={handleChange} />
            </TabPanel>
          </Tabs>
          <button className="submit-bttn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
