import mongoose from "mongoose";

const connectdb = () => {
  mongoose.Promise = global.Promise;

  var url =
    "mongodb+srv://loan-user:loanuser123@cluster0.oni0l.mongodb.net/cvdb?retryWrites=true&w=majority";
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

  var connect = mongoose.connection;
  connect.on("connected", function () {
    console.log("database is connected successfully");
  });
};
export default connectdb;
