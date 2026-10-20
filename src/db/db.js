const mongoose = require('mongoose')

async function connectDB() {

  
  await mongoose.connect(process.env.MONGO_URI)  //apne database ka naam jruru de .net/ ke bad

  console.log("Connected To DB");
  
}


module.exports = connectDB;