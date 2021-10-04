const mongoose = require('mongoose');

const user = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        trim: true
    }
});

const User = mongoose.model("User", user);

module.exports = {User};

