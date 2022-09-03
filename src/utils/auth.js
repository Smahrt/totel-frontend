import jwt from 'jsonwebtoken';

const signToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      // phoneCode: user.phoneCode,
      // phoneNumber: user.phoneNumber,
      // userImg: user.userImg,
      // isAdmin: user.isAdmin,
      // isOwner: user.isOwner,
      // isEmailVerified: user.isEmailVerified,
      // isPhoneVerified: user.isPhoneVerified,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};
const isAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization) {
    // Bearer xxx => xxx
    const token = authorization.slice(7, authorization.length);
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(401).send({ message: 'Token is not valid' });
      } else {
        req.user = decode;
        next();
      }
    });
  } else {
    res.status(401).send({ message: 'Token is not suppiled' });
  }
};
const isAdmin = async (req, res, next) => {
  if (req.user.isAdmin) {
    next();
  } else {
    res.status(401).send({ message: 'User is not admin' });
  }
};

export { signToken, isAuth, isAdmin };
