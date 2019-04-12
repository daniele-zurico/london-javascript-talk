import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
	email: String,
	token: String
});

const User = mongoose.model("users", UserSchema);
export { User };