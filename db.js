const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect(`mongodb://localhost:27017/certificateApi`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        }, () => {console.log(`connected to db ${process.env.DB}`)});
    } catch(err){
        console.log(err);
    }

}
module.exports = {
    connectDB
}