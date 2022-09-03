import React, { createContext, ReactNode, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import {
  auth,
  facebookAuthProvider,
  githubAuthProvider,
  googleAuthProvider,
  twitterAuthProvider,
} from "./firebase";
import { AuthUser } from "types/models-types/auth-user.types";
import {
  fetchError,
  fetchStart,
  fetchSuccess,
} from "redux/actions";
import { defaultUser } from "shared/constants/AppConst";

interface FirebaseContextProps {
  user: AuthUser | null | undefined;
  isAuthenticated: boolean;
  isLoading: boolean;
}

interface SignUpProps {
  fullName: string;
  email: string;
  password: string;
}

interface SignInProps {
  email: string;
  password: string;
}

interface FirebaseActionsProps {
  createUserWithEmailAndPassword: (data: SignUpProps) => void;
  signInWithEmailAndPassword: (data: SignInProps) => void;
  signInWithPopup: (type: string) => void;
  logout: () => void;
}

const FirebaseContext = createContext<FirebaseContextProps>({
  user: null,
  isAuthenticated: false,
  isLoading: false,
});
const FirebaseActionsContext = createContext<FirebaseActionsProps>({
  createUserWithEmailAndPassword: () => {},
  signInWithEmailAndPassword: () => {},
  signInWithPopup: () => {},
  logout: () => {},
});

export const useFirebase = () => useContext(FirebaseContext);

export const useFirebaseActions = () => useContext(FirebaseActionsContext);

interface FirebaseAuthProviderProps {
  children: ReactNode;
}

const FirebaseAuthProvider: React.FC<FirebaseAuthProviderProps> = ({
  children,
}) => {
  const [firebaseData, setFirebaseData] = useState<FirebaseContextProps>({
    user: defaultUser,
    isLoading: false,
    isAuthenticated: true,
  });
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const getAuthUser = auth.onAuthStateChanged(
  //     (user) => {
  //       setFirebaseData({
  //         user: user as AuthUser,
  //         isAuthenticated: Boolean(user),
  //         isLoading: false,
  //       });
  //     },
  //     () => {
  //       setFirebaseData({
  //         user: firebaseData.user,
  //         isLoading: false,
  //         isAuthenticated: false,
  //       });
  //     },
  //     () => {
  //       setFirebaseData({
  //         user: firebaseData.user,
  //         isLoading: false,
  //         isAuthenticated: true,
  //       });
  //     }
  //   );
  //
  //   return () => {
  //     getAuthUser();
  //   };
  // }, [firebaseData.user]);

  const getProvider = (providerName: string) => {
    switch (providerName) {
      case "google": {
        return googleAuthProvider;
      }
      case "facebook": {
        return facebookAuthProvider;
      }
      case "twitter": {
        return twitterAuthProvider;
      }
      case "github": {
        return githubAuthProvider;
      }
      default:
        return googleAuthProvider;
    }
  };

  const signInWithPopup = async (providerName: string) => {
    dispatch(fetchStart());
    try {
      const { user } = await auth.signInWithPopup(getProvider(providerName));
      setFirebaseData({
        user: user as AuthUser,
        isAuthenticated: true,
        isLoading: false,
      });
      dispatch(fetchSuccess());
    } catch ({ message }) {
      setFirebaseData({
        ...firebaseData,
        isAuthenticated: false,
        isLoading: false,
      });
      dispatch(fetchError(message as string));
    }
  };

  const signInWithEmailAndPassword = async ({
    email,
    password,
  }: SignInProps) => {
    dispatch(fetchStart());
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      setFirebaseData({
        user: user as AuthUser,
        isAuthenticated: true,
        isLoading: false,
      });
      dispatch(fetchSuccess());
    } catch ({ message }) {
      setFirebaseData({
        ...firebaseData,
        isAuthenticated: false,
        isLoading: false,
      });
      dispatch(fetchError(message as string));
    }
  };
  const createUserWithEmailAndPassword = async ({
    fullName,
    email,
    password,
  }: SignUpProps) => {
    dispatch(fetchStart());
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await auth!.currentUser!.sendEmailVerification({
        url: window.location.href,
        handleCodeInApp: true,
      });
      await auth!.currentUser!.updateProfile({
        displayName: fullName,
      });
      setFirebaseData({
        user: { ...user, fullName: fullName } as AuthUser,
        isAuthenticated: true,
        isLoading: false,
      });
      dispatch(fetchSuccess());
    } catch ({ message }) {
      setFirebaseData({
        ...firebaseData,
        isAuthenticated: false,
        isLoading: false,
      });
      dispatch(fetchError(message as string));
    }
  };

  const logout = async () => {
    setFirebaseData({ ...firebaseData, isLoading: true });
    try {
      await auth.signOut();
      setFirebaseData({
        user: null,
        isLoading: false,
        isAuthenticated: false,
      });
    } catch (error) {
      setFirebaseData({
        user: null,
        isLoading: false,
        isAuthenticated: false,
      });
    }
  };

  return (
    <FirebaseContext.Provider
      value={{
        ...firebaseData,
      }}
    >
      <FirebaseActionsContext.Provider
        value={{
          signInWithEmailAndPassword,
          createUserWithEmailAndPassword,
          signInWithPopup,
          logout,
        }}
      >
        {children}
      </FirebaseActionsContext.Provider>
    </FirebaseContext.Provider>
  );
};
export default FirebaseAuthProvider;
