import React from "react";
import { useLocation } from "react-router-dom";
import "./style.css";

import { Link } from "react-router-dom";

const Cv = () => {
  const location = useLocation();

  return (
    <>
      <div className="text-center gist">
        <div className="row align-items-start decor">
          <div className="col-md-4 ">
            <img
              className="img-decor"
              src={location.state.profile_image}
              alt="image of user"
              width="150"
              height="150"
            />
          </div>
          <div className="col-md-4 title-desc">
            <h1>
              {location.state.name[0].toUpperCase() +
                location.state.name.substring(1)}
            </h1>
            <p>
              Currently work as <b>{location.state.current_designation}</b> at
              the &nbsp;&nbsp;&nbsp;
              <strong>
                <a href={location.state.current_company_url}>
                  {location.state.current_company}
                </a>
              </strong>
            </p>
            <p>{location.state.one_line_profile_description}</p>
            <p>
              Current CTC:{location.state.ctc}LPA, Expected CTC:
              {location.state.etc}LPA
            </p>
          </div>
          <div className="col-md-4">
            <Link className="contactme" to="/contact" state={location.state}>
              Contact me
            </Link>
          </div>
        </div>
        <hr />
        <div className="row align-items-start">
          <div className="col-md-12">
            <h3>What I bring on table</h3>
            <ul className="list">
              {location.state.soft_skills.map((ss, i) => {
                return <li key={i}>{ss.skill}</li>;
              })}
            </ul>
          </div>
        </div>
        <hr />
        <div className="row align-items-start">
          <div className="col-md-12">
            <h3>Portfolio Links</h3>
            &nbsp;&nbsp;
            <ul className="list">
              {location.state.portfolio.map((pfo, i) => {
                return (
                  <li key={i}>
                    <img
                      src="git.png"
                      height="50px"
                      width="50px"
                      alt="favicon"
                    />
                    <a key={i} href={pfo.protfolio_link}>
                      {pfo.protfolio_label}
                    </a>
                    {pfo.my_role}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <hr />
        <div className="row align-items-start">
          <div className="col-md-12">
            <h3>Work Experience</h3>
            <table className="work-exp">
              <thead className="heading">
                <tr>
                  <th>Company</th>
                  <th>Designation</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody className="record">
                {location.state.previous_job.map((job, i) => {
                  return (
                    <tr key={i}>
                      <td>{job.company}</td>
                      <td>{job.designation}</td>
                      <td>{job.duration}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <hr />
        <div className="row align-items-start">
          <h3>Skills</h3>
          <div className="col-md-12">
            <table>
              <tbody>
                <tr>
                  {location.state.skill.map((sk, i) => {
                    return (
                      <td class="skill-space">
                        {sk.skill_name[0].toUpperCase() +
                          sk.skill_name.substring(1)}
                        &nbsp;&nbsp;
                        {(() => {
                          const count = sk.rating;
                          const arr = [];
                          for (let i = 0; i < count; i++) {
                            arr.push(
                              <img src="./star.png" width="30" height="30" />
                            );
                          }
                          return arr;
                        })()}
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <hr />
        <div className="row align-items-start">
          <h3>My hobbies</h3>
          <div className="col-md-6">
            <ul className="list">
              {(() => {
                let h = location.state.hobbies[0].hobby.split(",");
                let arr = [];
                h.map((item) => {
                  arr.push(<li>{item}</li>);
                });
                return arr;
              })()}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cv;
