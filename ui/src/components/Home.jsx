import React from "react";
import Form from "../components/Form";
import cvlogo from "../assets/cv-logo.png";
import "../../src/App.css";
const Home = () => {
  const handleClick = () => {
    return <Form></Form>;
  };
  return (
    <>
      <div className="container">
        <a href="/" target="_blank">
          <img
            src={cvlogo}
            className="cv-logo"
            alt="CV logo"
            height="80"
            width="80"
          />
        </a>
        <div className="box">
          <h1>Build CV in minute online</h1>
        </div>
        <div className="bttn-grp">
          <span>
            <button className="bttn" onClick={handleClick}>
              Demo
            </button>
            <button className="bttn" onClick={handleClick}>
              Try now
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;
