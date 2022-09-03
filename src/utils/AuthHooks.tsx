// For Firebase Auth
import { useFirebase, useFirebaseActions } from 'services/auth/firebase/FirebaseAuthProvider';
import { getUserFromFirebase } from './helper/AuthHelper';

export const useAuthUser = () => {
  const {user, isAuthenticated, isLoading} = useFirebase();
  return {
    isLoading,
    isAuthenticated,
    user: getUserFromFirebase(user),
  };
};

export const useFirebaseAuthMethod = () => {
  const {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    logout,
  } = useFirebaseActions();

  return {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    logout,
  };
};
