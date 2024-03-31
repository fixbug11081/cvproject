import React from "react";
import "../../src/App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Personal from "./Personal.jsx";
import Education from "./Education.jsx";
import Work from "./Work.jsx";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Form = () => {
  return (
    <>
      <div className="fluid-container">
        <form>
          <h1>CV Form</h1>
          <Tabs>
            <TabList>
              <Tab>Personal Information</Tab>
              <Tab>Education</Tab>
              <Tab>Work Experience</Tab>
            </TabList>
            <TabPanel>
              <Personal />
            </TabPanel>
            <TabPanel>
              <Education />
            </TabPanel>
            <TabPanel>
              <Work />
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
