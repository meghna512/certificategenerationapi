const express = require("express");
const app = express();
const router = require('./routes/index');
const db = require('./db');
const path = require('path');
const bodyParser = require('body-parser');

db.connectDB();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'certificates')));
app.use('/', router);

app.listen(3000, () => {
    console.log('server is up');
})