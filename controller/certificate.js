const Certificates = require("../model/certificate");
const shortid = require('shortid');
const { fork } = require('child_process');
const pathModule = require('path');

const generateCertificate = async (req, res) => {
    let newCertificate = new Certificates();
    newCertificate.uid = shortid.generate();
    const forked = fork(pathModule.join(__dirname, '../generatePng.js'), [req.body.name, newCertificate.uid]);


}

const getCertificate = async (req, res) => {
    console.log(req.params.certificateUid);
    const certificateUid = req.params.certificateUid;
    let certificate;
    try {
        certificate = await Certificates.findOne({uid : certificateUid});
    }catch(err){
        return res.status(500).json({ message: err.message });
    }
    if(certificate){
        // do something
    }else{
        console.log("Certificate not found");
    }

}

module.exports = {
    generateCertificate,
    getCertificate
}