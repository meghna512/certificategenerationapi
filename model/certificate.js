const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CertificateSchema = new Schema({
    uid: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    }
});

const certificates = mongoose.model("certificate", CertificateSchema);

module.exports = certificates;