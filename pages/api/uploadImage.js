const cloudinary = require('cloudinary').v2;
const upload = require('../../middleware/uploadImage');

cloudinary.config({
  cloud_name: "dtnsw323d",
  api_key: "983831334437864",
  api_secret: "PWMhU31WYx8BwxLs9qixQYCjAXI"
});


export default async function handler(req, res) {
  console.log("ghg",req.files)
  try {
    const result = await cloudinary.uploader.upload(req.files);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error uploading image' });
  }
};
// fgdfgdfg
