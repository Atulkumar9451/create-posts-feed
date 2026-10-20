const app = require('./src/app')
const dotenv1= require("dotenv");
dotenv1.config();
const connectDB = require('./src/db/db')
const dotenv = require("dotenv");
dotenv.config();
connectDB();

app.listen(3000,()=>{

  console.log("server is running on port no. 3000"); 
 
})


