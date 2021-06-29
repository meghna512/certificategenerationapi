//Om sai ram
const app = require('express')();
const router = require('./routes/index');
const db = require('./db');
const bodyParser = require('body-parser');

db.connectDB();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', router);

app.listen(3000, () => {
    console.log('server is up');
})