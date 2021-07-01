const express = require("express");
const app = express();
require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./routes/index');
const db = require('./db');


db.connectDB();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'certificates')));
app.use('/', router);

app.listen(process.env.PORT, () => {
    console.log('server is up at', process.env.PORT);
})