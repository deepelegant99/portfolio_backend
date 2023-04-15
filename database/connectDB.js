const mongoose = require('mongoose')


const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.URI).then(()=>console.log('connected to Mongobd'))
  } catch (error) {
    console.error(error);
  }
};

module.exports = dbConnection; 