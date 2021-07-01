const Certificates = require("../model/certificate");
const shortid = require('shortid');
const { execSync } = require('child_process');
const pathModule = require('path');

const generateCertificate = async (req, res) => {
    let newCertificate = new Certificates();
    newCertificate.uid = shortid.generate();
    newCertificate.name = req.body.name;
    newCertificate.path = `certificates/${newCertificate.uid}.png`;

    try {
        execSync(`convert -size 1920x1080 -gravity Center -pointsize 100 -fill black label:${newCertificate.name} ./certificates/${newCertificate.uid}.png`);
        await newCertificate.save();
        return res.sendFile(pathModule.join(__dirname, `../${newCertificate.path}`));
    } catch (err) {
        return res.status(500).json({ message: err })
    }

}

const getCertificate = async (req, res) => {
    const certificateUid = req.params.certificateUid;
    let certificate;
    try {
        certificate = await Certificates.findOne({ uid: certificateUid });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    if (certificate) {
        return res.sendFile(pathModule.join(__dirname, `../${certificate.path}`));
    } else {
        return res.status(404).json({ message: "File not found" });
    }

}

module.exports = {
    generateCertificate,
    getCertificate
}