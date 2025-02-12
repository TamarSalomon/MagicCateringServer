const mongoose = require('mongoose');
const validator = require('validator');


const userSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    type: {
        required: true,
        type: String,
        enum: ["mainAdmin", "user", "admin"],
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: validator.isEmail,
            message: props => `${props.value} is not a valid email!`
        }
    }
});


module.exports = mongoose.model('User', userSchema);