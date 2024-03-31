import express from "express";

import cors from "cors";
import connectdb from "./connection.js";
import CVModel from "./CVModel.js";
import bodyParser from "body-parser";

var PORT = 5010;
var app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("Server started");
  res.send("Hello world");
});
app.post("/save", async (req, res) => {
  try {
    connectdb();

    const CVdata = new CVModel({
      profile_image: req.body.person_img,
      name: req.body.name,
      address: req.body.address,
      emailid: req.body.email,
      mobile: req.body.mobile,
      professional_linkedin: req.body.lurl,
      professional_youtube: req.body.yurl,
      professional_git: req.body.gurl,
      current_designation: req.body.curr_designation,
      current_company: req.body.curr_comp,
      current_company_url: req.body.comp_url,
      one_line_profile_description: req.body.description,
      ctc: req.body.ctc,
      etc: req.body.etc,
      highest: {
        degree: req.body.degree,
        college: req.body.college,
        year: req.body.year,
      },
      soft_skills: [
        {
          skill: req.body.skill1,
        },
        {
          skill: req.body.skill2,
        },
        {
          skill: req.body.skill3,
        },
      ],
      portfolio: [
        {
          protfolio_link: req.body.plink,
          protfolio_label: req.body.project_name,
          my_role: req.body.prole,
        },
      ],
      previous_job: [
        {
          duration: req.body.duration,
          designation: req.body.designation,
          company: req.body.comp_name,
        },
      ],
      skill: [
        {
          skill_name: req.body.proficiency,
          rating: req.body.rating,
        },
      ],
      hobbies: [
        {
          hobby: req.body.hobby,
        },
      ],
    });

    await CVdata.save();
    res.send(CVdata);
  } catch (e) {
    console.log("Error occured " + e);
  }
});
//if (process.env.DEVELOPMENT) {
app.listen(PORT, (req, res) => {
  console.log("server run at port " + PORT);
});
//}
