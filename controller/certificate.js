const Certificates = require("../model/certificate");
const shortid = require('shortid');
const { fork } = require('child_process');
const pathModule = require('path');

const generateCertificate = async (req, res) => {
    let newCertificate = new Certificates();
    newCertificate.uid = shortid.generate();
    newCertificate.name = req.body.name;
    newCertificate.path = `certificates/${newCertificate.uid}.png`;
    try{
        await newCertificate.save();
    }catch(err){
        return res.status(500).json({message: err.message});
    }
   
   //const forked = fork(pathModule.join(__dirname, '../generatePng.js'), [req.body.name, newCertificate.uid]);


}

const getCertificate = async (req, res) => {
    const certificateUid = req.params.certificateUid;
    let certificate;
    try {
        certificate = await Certificates.findOne({uid : certificateUid});
    }catch(err){
        return res.status(500).json({ message: err.message });
    }
    if(certificate){
        return res.sendFile(pathModule.join(__dirname,`../${certificate.path}`));
    }else{
        return res.status(404).json({message: "File not found"});
    }

}

module.exports = {
    generateCertificate,
    getCertificate
}