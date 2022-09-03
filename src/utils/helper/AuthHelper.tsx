import { authRole } from "shared/constants/AppConst";

export const getUserFromJwtAuth = (user: any) => {
  if (user)
    return {
      id: user.id,
      uid: user._id,
      fullName: user.fullName,
      email: user.email,
      photoURL: user.image,
      role: authRole.user,
    };
  return user;
};

export const getUserFromAuth0 = (user: any) => {
  if (user)
    return {
      id: 1,
      uid: user.sub,
      fullName: user.name,
      email: user.email,
      photoURL: user.picture,
      role: authRole.user,
    };
  return user;
};

export const getUserFromFirebase = (user: any) => {
  if (user)
    return {
      id: 1,
      uid: user.uid,
      fullName: user.fullName ? user.fullName : "Gocoom User",
      email: user.email,
      photoURL: user.photoURL ? user.photoURL : "/assets/images/avatar/A11.jpg",
      role: authRole.user,
    };
  return user;
};

export const getUserFromAWS = (user: any) => {
  if (user)
    return {
      id: 1,
      uid: user.username,
      fullName: user.attributes.name ? user.attributes.name : "Gocoom User",
      email: user.attributes.email,
      photoURL: user.photoURL,
      role: authRole.user,
    };
  return user;
};
