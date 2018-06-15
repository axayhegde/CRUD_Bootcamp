var express = require('express');
var router = express.Router();
var Bootcamper = require('../models/bootcamper');


//Registering a new Bootcamper
router.post('/',function(req,res){

    res.send('hit');
});
router.post('/addBootcamper',function(req,res){
    var bootcamper = new Bootcamper();

    bootcamper.bootcamperName = req.body.bootcamperName;
    bootcamper.bootcamperAge = req.body.bootcamperAge;
    bootcamper.bootcamperBatchNumber = req.body.bootcamperBatchNumber;
    bootcamper.bootcamperWorkExp = req.body.bootcamperWorkExp;


    bootcamper.save(function(err){
        if(err) throw err;
        res.json({"Status" : "BootCamper Saved"});
    });
});

//View all bootcampers
router.get('/viewBootcamper', function(req, res) {
    Bootcamper.find({}, function (err, bootcampers) {
        if (err) {
            console.log(err)
        } else {
            console.log(bootcampers);
            res.json(bootcampers);
            res.end();
        }
    })
});

//Edit Bootcampers
router.post('/editBootcamper', function(req, res) {
    Bootcamper.findOneAndUpdate({ bootcamperName: req.body.bootcamperName }, { "$set": { "bootcamperName": req.body.bootcamperName, "bootcamperAge": req.body.bootcamperAge, "bootcamperBatchNumber": req.body.bootcamperBatchNumber, "bootcamperWorkExp": req.body.bootcamperWorkExp}}).exec(function(err, bootcamper){
        if(err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.status(200).send(bootcamper);
        }
    });
});

//Delete Bootcampers
router.post('/editBootcamper', function(req, res) {
    Bootcamper.findOneAndUpdate({ bootcamperName: req.body.bootcamperName }, { "$set": { "bootcamperName": req.body.bootcamperName, "bootcamperAge": req.body.bootcamperAge, "bootcamperBatchNumber": req.body.bootcamperBatchNumber, "bootcamperWorkExp": req.body.bootcamperWorkExp}}).exec(function(err, bootcamper){
        if(err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.status(200).send(bootcamper);
        }
    });
    Bootcamper.remove({ bootcamperName: req.body.bootcamperName }, function(err) {
        if (!err) {
            console.log(err);
            res.status(500).send(err);
        }
        else {
            res.status(200).send("deleted!");
        }
    });
});


module.exports = router;