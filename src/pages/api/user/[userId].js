import nextconnect from 'next-connect';
import bcrypt from 'bcryptjs';

import {isAdmin, isAuth, signToken} from 'utils/auth';
import User from '../../../models/User';
import db from 'utils/db';

const handler = nextconnect();
handler.use(isAuth);

handler.get(async (req, res) => {
	await db.connect();
	const user = await User.findById(req.query.userId);
	// User.updateMany({}, { $rename: { isEmailConfirmed: 'isEmailVerified' } }, { multi: true }, function(err, blocks) { if(err) { throw err; } console.log('done!')});
	await db.disconnect();
	res.send(user);
});

handler.put(async (req, res) => {
	await db.connect();
	const user = await User.findById(req.user._id);

	if (req.body.userImg) {
		user.userImg = req.body.userImg;
	} else if (req.body.oldPassword) {
		if (bcrypt.compareSync(req.body.oldPassword, user.password)) {
			user.password = bcrypt.hashSync(req.body.password);
		} else {
			res.status(401).send({message: 'Old password is wrong'});
		}
	} else {
		user.fullname = req.body.fullname;
		user.email = req.body.email;
		user.bio = req.body.bio;
		user.phoneCode = req.body.phoneCode;
		user.phoneNumber = req.body.phoneNumber;
	}

	await user.save();
	await db.disconnect();
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
});

export default handler;
