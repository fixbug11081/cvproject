import express from "express";

import cors from "cors";
import connectdb from "./connection.js";
import CVModel from "./CVModel.js";
import bodyParser from "body-parser";
import util from "./util.js";
import fs from "fs";
import { v4 as uuid4 } from "uuid";
import ejs from "ejs";
import path from "path";
import qs from "qs";
import open from "open";

var PORT = 5010;
var app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static("public"));
app.set("views", "./views/cvtemplate");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("Server started");
  res.send("Hello world");
});

app.post("/save", async (req, res) => {
  try {
    connectdb();
    console.log(req.body);
    let j = 1;

    var pfo = [];
    var comp = [];
    for (let i = 0; i < 5; i++) {
      if (eval("req.body.plink" + i) !== undefined) {
        pfo[i] = {
          protfolio_label: eval("req.body.project_name" + i),
          protfolio_link: eval("req.body.plink" + i),
          my_role: eval("req.body.prole" + i),
        };
      }
      if (eval("req.body.comp_name" + i) !== undefined) {
        comp[i] = {
          company: eval("req.body.comp_name" + i),
          designation: eval("req.body.designation" + i),
          duration: eval("req.body.duration" + i),
        };
      }
    }

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

      portfolio: pfo,
      previous_job: comp,
      skill: [
        {
          skill_name: req.body.proficiency1,
          rating: req.body.rating1,
        },
        {
          skill_name: req.body.proficiency2,
          rating: req.body.rating2,
        },
        {
          skill_name: req.body.proficiency3,
          rating: req.body.rating3,
        },
      ],
      hobbies: [
        {
          hobby: req.body.hobby,
        },
      ],
    });

    await CVdata.save();
    res.json({ statusCode: 200, message: "Your record has been saved" });
  } catch (e) {
    res.json({ statusCode: 500, message: "Error occured " + e });
  }
});

app.get("/getcv", async (req, res) => {
  try {
    const email = req.query.email;
    let cvdata = await CVModel.find({ emailid: email });
    res.send({ statusCode: 200, data: cvdata[0] });
  } catch (e) {
    res.send({ statusCode: 500, data: e });
  }
});

app.post("/upload", (req, res) => {
  console.log(req.body);
});
//if (process.env.DEVELOPMENT) {
app.listen(PORT, (req, res) => {
  console.log("server run at port " + PORT);
});
//}
