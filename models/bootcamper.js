var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BootcamperSchema = new Schema({
    bootcamperName: { type: String, required: true},
    bootcamperAge: { type: String, required: true},
    bootcamperBatchNumber: { type: String, required: true },
    bootcamperWorkExp: { type: String, required: true },

});

module.exports = mongoose.model('Bootcamper',BootcamperSchema);