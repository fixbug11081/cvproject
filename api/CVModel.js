import mongoose from "mongoose";

const CVModelSchema = new mongoose.Schema({
  profile_image: {
    type: String,
  },
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  emailid: {
    type: String,
  },
  mobile: {
    type: String,
  },
  professional_linkedin: {
    type: String,
  },
  professional_youtube: {
    type: String,
  },
  professional_git: {
    type: String,
  },
  current_designation: {
    type: String,
  },
  current_company: {
    type: String,
  },
  current_company_url: {
    type: String,
  },
  one_line_profile_description: {
    type: String,
  },
  ctc: {
    type: String,
  },
  etc: {
    type: String,
  },
  highest: {
    degree: {
      type: String,
    },
    college: {
      type: String,
    },
    year: {
      type: String,
    },
  },
  soft_skills: [
    {
      skill: {
        type: String,
      },
    },
    {
      skill: {
        type: String,
      },
    },
    {
      skill: {
        type: String,
      },
    },
  ],
  portfolio: [
    {
      protfolio_link: {
        type: String,
      },
      protfolio_label: {
        type: String,
      },
      my_role: {
        type: String,
      },
    },
    {
      protfolio_link: {
        type: String,
      },
      protfolio_label: {
        type: String,
      },

      my_role: {
        type: String,
      },
    },
  ],
  previous_job: [
    {
      duration: {
        type: String,
      },
      designation: {
        type: String,
      },
      company: {
        type: String,
      },
    },
  ],
  skill: [
    {
      skill_name: {
        type: String,
      },
      rating: {
        type: String,
      },
    },
  ],
  hobbies: [
    {
      hobby: {
        type: String,
      },
    },
  ],
});

const CVModel = mongoose.model("CVModel", CVModelSchema);
export default CVModel;
