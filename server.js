var multer = require("multer");
var express = require('express');
var app = express();

var upload = multer();

app.use(express.static('public'));


app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.post("/uploads", upload.single("theFile"), function(req, res){
  res.json({"size": req.file.size});
});


var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
