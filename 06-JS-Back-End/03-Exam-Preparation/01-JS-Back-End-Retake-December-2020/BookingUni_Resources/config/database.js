const mongoose = require("mongoose");

// TODO change database according to assigment
const CONNECTION_STRING = "mongodb://localhost:27017/booking-uni";

module.exports = async (app) => {
  try {
    await mongoose.connect(CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
