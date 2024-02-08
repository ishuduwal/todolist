import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
})

const User = new mongoose.model("User", UserSchema)
export default User;