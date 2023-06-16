const mongoose = require("mongoose");

// TODO change database according to assigment
const CONNECTION_STRING = "mongodb://localhost:27017/jobAds";

module.exports = async (app) => {
  try {
    await mongoose.connect(CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
