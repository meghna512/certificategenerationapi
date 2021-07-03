require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://${process.env.MONGODB_HOST}/${process.env.DB}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        }, () => { console.log(`connected to db ${process.env.DB}`) });
    } catch (err) {
        console.log(err);
    }

}
module.exports = {
    connectDB
}