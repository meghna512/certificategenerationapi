const Certificates = require("../model/certificate");
const shortid = require('shortid');
const {fork} = require('child_process');
const pathModule = require('path');

const generateCertificate = async (req, res) => {
   let newCertificate = new Certificates();
    newCertificate.uid = shortid.generate();
    const forked = fork(pathModule.join(__dirname, '../generatePng.js'), [req.body.name, newCertificate.uid]);


}

module.exports = {
    generateCertificate
}