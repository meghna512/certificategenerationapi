 const router = require('express').Router();
 const {generateCertificate} = require('../controller/certificate');
const validateMiddleware = require('../middleware/certificateValidation');

router.post('/certificate', validateMiddleware,generateCertificate);

module.exports= router; 