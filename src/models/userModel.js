const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId:String,
    name:String,
    password: String,
    type: {
        type: String,
        enum: ["user", "mainAdmin", "admin"],
     
    }
});


module.exports = mongoose.model('User', userSchema);