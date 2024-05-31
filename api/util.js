import path from "path";
import fs from "fs";

const util = (foldername) => {
  try {
    fs.mkdir("./public/" + foldername, (err) => {
      if (err) {
        console.log("Fail to create the folder");
      }

      console.log("Folder created successfully");
    });
  } catch (e) {
    console.log("Error is : " + e);
  }
};

export default util;
