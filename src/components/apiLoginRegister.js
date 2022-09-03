import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

import User from '../models/User';
import {signToken} from 'utils/auth';
import captcha from 'utils/captcha';

const apiLoginRegister = async (whichPage, req, res) => {
	try {
		await mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		let user = {};
		user = await User.findOne({email: req.body.email});
		if (whichPage === 'register') {
			if (user) {
				return res.status(409).json({
					message: req.body.email + ' is already registered.',
				});
			}
			if (!req.body.recaptchaValue) {
				return res.status(422).json({
					message: 'Captcha is required.',
				});
			}
			const captchaStatus = await captcha(req.body.recaptchaValue);
			if (captchaStatus.status) {
				const newUser = new User({
					fullname: req.body.fullname,
					email: req.body.email,
					password: bcrypt.hashSync(req.body.password),
					userImg: '',
					bio: '',
					phoneCode: '',
					phoneNumber: '',
					isAdmin: false,
					isOwner: false,
					isEmailVerified: false,
					isPhoneVerified: false,
				});
				user = await newUser.save();
			}
		}
		await mongoose.disconnect();
		if (
			whichPage === 'login' &&
			!(user && bcrypt.compareSync(req.body.password, user.password))
		) {
			// if (whichPage === 'login') && (user does not exist || password not correct)
			res.status(401).send({message: 'Invalid email or password'});
		} else {
			// if (whichPage === 'register') || ((whichPage === 'login') && user exists && password correct)
			const token = signToken(user);
			res.send({
				token,
				_id: user._id,
				fullname: user.fullname,
				email: user.email,
				userImg: user.userImg,
				phoneCode: user.phoneCode,
				phoneNumber: user.phoneNumber,
				isAdmin: user.isAdmin,
				isOwner: user.isOwner,
				isEmailVerified: user.isEmailVerified,
				isPhoneVerified: user.isPhoneVerified,
			});
		}
	} catch (err) {
		return res.status(400).json({
			message: JSON.stringify(err),
		});
	}
};

export default apiLoginRegister;
