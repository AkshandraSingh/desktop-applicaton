const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
    userPassword: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    }
});

userSchema.set('timestamps', true)

module.exports = mongoose.model('user', userSchema);
