import mongoose from 'mongoose';

const user = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        trim: true
    }
});

const User = mongoose.model("User", user);

export default User;

