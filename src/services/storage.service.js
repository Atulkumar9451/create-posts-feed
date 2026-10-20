const dotenv = require("dotenv");
dotenv.config();

const ImageKit =  require("@imagekit/nodejs");

const imagekit = new ImageKit({
  publicKey:process.env.IMAGEKIT_PUBLIC_KEY,    // required
  privateKey:process.env.IMAGEKIT_PRIVATE_KEY,// required
  urlEndpoint:process.env.IMAGEKIT_URL_ENDPOINT  // required
});
async function uploadFile(buffer){
  const result = await imagekit.files.upload({
    file:buffer.toString("base64"),
    fileName:"image.jpg"
  })
  return result;
}

module.exports = uploadFile
