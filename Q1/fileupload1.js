const express = require('express')
const multer  = require('multer')
const path = require('path');
const app = express();
app.use(express.static('public'));  
var options = multer.diskStorage({ 
    destination : function (req, file, cb) {
      if (file.mimetype !== 'application/pdf') 
      {
        return cb('Invalid file format'); //cb(err)
      }
      cb(null, './uploads');
    } ,
      filename: function (req, file, cb) {
        cb(null, (Math.random().toString(30)).
          slice(5, 10) + Date.now() 
          + path.extname(file.originalname));
      }
});
var upload= multer({ storage: options });

app.post('/single_upload', upload.single("myfile"), function (req, res, next) {
  res.write("file uploaded");
  res.end();
})

app.post('/multiple_upload', upload.array('pdfs',2), function (req, res, next) {
  // req.files is array of `pdf` files
  console.log(req.files)
	res.send('<script>alert("Files uploaded successfully!");</script>');
})

app.use(function (err, req, res, next) {
  if (err instanceof multer.MulterError) 
  {
    console.log("error");
    res.status(500).send("file upload  err "+err.message);

  }
  else 
    next(err);
});
app.listen(8000);