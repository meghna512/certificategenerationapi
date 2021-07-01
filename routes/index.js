const router = require('express').Router();
const {generateCertificate, getCertificate} = require('../controller/certificate');
const validateMiddleware = require('../middleware/certificateValidation');

router.post('/certificate', validateMiddleware,generateCertificate);

router.get('/certificate/:certificateUid', getCertificate );

module.exports= router; 