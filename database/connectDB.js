const mongoose = require('mongoose')


const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("connected");
  } catch (error) {
    console.error(error);
  }
};

module.exports = dbConnection; 