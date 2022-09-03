import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
	{
		fullname: {type: String, required: true},
		email: {type: String, required: true, unique: true},
		password: {type: String, required: true},
		userImg: {type: String},
		bio: {type: String},
		phoneCode: {type: String},
		phoneNumber: {type: String},
		isAdmin: {type: Boolean, required: true, default: false},
		isOwner: {type: Boolean, required: true, default: false},
		isEmailVerified: {type: Boolean, required: true, default: false},
		isPhoneVerified: {type: Boolean, required: true, default: false},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
