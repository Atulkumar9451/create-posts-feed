const express = require('express')
const multer = require('multer');

const uploadFile = require('./services/storage.service');
// const run =  require('./services/storage.service')
// run();

const postModel = require("./models/post.model")
const cors = require('cors');


const app = express()


const cors = require('cors');
app.use(cors({
  origin: "https://show-posts-feed.onrender.com",  // Vercel ka live URL
  credentials: true
}));


app.use(express.json());  //ye tab use hota hai jab data raw format me aaa raha tha j express usko readadble bana deta tha ab data form data me aa raha hai ab dusra 


const upload = multer({ storage: multer.memoryStorage() })

//so new middleware 

//file ko read karnae ka tarika


//imp:  multer ka kaam express ko power dena ki file(image video ya dataform me aye data ko read kr paye)

app.post('/create-posts', upload.single("image"), async (req, res) => {


  console.log(req.body);
  console.log(req.file);


  const result = await uploadFile(req.file.buffer)
  console.log(result);
  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption
  })

  return res.status(201).json({
    message: "post created successfully",
    post
  })
})


app.get("/posts", async (req, res) => {
  const posts = await postModel.find()


  return res.status(200).json({
    message: "posts fetched successfully",
    posts
  })
})



module.exports = app