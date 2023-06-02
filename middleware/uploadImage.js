import multer from 'multer';

// Configuration for file storage
const storage = multer.diskStorage({
 
  destination: function (req, file, cb) {
    cb(null, '../upload/image');
  },
  filename: function (req, file, cb) {
    console.log("dasf", file.originalname)
    cb(null, file.originalname);
  },
});

// Create the multer middleware instance
const upload = multer({ storage: storage });

export default upload;