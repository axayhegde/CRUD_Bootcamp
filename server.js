var express = require('express');
var bodyParser = require('body-parser');
var db = require('./dbconnect');
var multer  = require('multer');

var upload = multer({ dest: 'uploads/' });

var app = express();
var PORT = 3132;

//Middleware

app.use(bodyParser.json());
var bootcamperRoutes = require('./routes/bootcamperRoutes');
app.use("/bootcamper", bootcamperRoutes);


app.use(bodyParser.urlencoded({extended:true}));

var upload = multer().single('avatar')

app.post('/profile', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            // An error occurred when uploading
            return
        }

        // Everything went fine
    })
})



app.listen(PORT, function(err){
    if(err) throw err;
    console.log('Server is running on port : ' + PORT);
});