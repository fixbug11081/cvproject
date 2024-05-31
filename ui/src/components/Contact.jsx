import React from "react";
import { useLocation, Link } from "react-router-dom";
const Contact = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <div className="text-center gist">
      <h1>
        My Contact
        <Link className="back-bttn" to="/cv" state={data}>
          back
        </Link>
      </h1>
      <div className="row align-items-start">
        <div className="col-md-12">
          <ul className="list">
            <li>
              <b>Address:</b>
              {data.address}
            </li>
            <li>
              <b>Emailid:</b> {data.emailid}
            </li>
            <li>
              <b>Mobile no:</b>
              {data.mobile}
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <h1>Professional Links</h1>
      <div className="row align-items-start">
        <div className="col-md-12 ">
          <ul className="list">
            <li>
              <img
                src="http://localhost:5173/linkedin.png"
                alt=""
                height="30"
                width="30"
              />
              &nbsp;&nbsp;
              <a href={data.professional_linkedin} target="_blank">
                Linkedin profile
              </a>
            </li>
            <li>
              <img
                src="http://localhost:5173/youtube.png"
                alt=""
                height="30"
                width="30"
              />
              &nbsp;&nbsp;
              <a href={data.professional_youtube} target="_blank">
                Youtube profile
              </a>
            </li>
            <li>
              <img
                src="http://localhost:5173/git.png"
                alt=""
                height="30"
                width="30"
              />
              &nbsp;&nbsp;
              <a href={data.professional_git} target="_blank">
                Git profile
              </a>
            </li>
          </ul>
        </div>

        <hr />
        <div className="row align-items-start">
          <div className="col-md-12">
            <h1>Mail me</h1>
            <form
              className="form-style"
              action="mailto:ajeet.2015.gos@gmail.com"
              method="post"
              encType="text/plain"
            >
              <table>
                <tr>
                  <td>
                    <label for="">Your Name</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="yourname"
                      value=""
                      placeholder="name"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label for="">Your Mobile number</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="yourmobile"
                      value=""
                      placeholder="mobile"
                    />
                    <br />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label for="">Your Email</label>
                  </td>
                  <td>
                    <input
                      type="email"
                      name="youremail"
                      value=""
                      placeholder="email"
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <label for="">Message</label>
                  </td>
                  <td>
                    <textarea
                      name="message"
                      rows="20"
                      cols="100"
                      placeholder="message"
                    ></textarea>
                  </td>
                  <td>
                    <input
                      className="design-bttn"
                      type="submit"
                      name="button"
                    />
                  </td>
                </tr>
              </table>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
