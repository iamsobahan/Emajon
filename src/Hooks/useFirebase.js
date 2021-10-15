import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialise from "../Firebase/firebase.initialise";
firebaseInitialise();

const useFirebase = () => {
  const [user, setuser] = useState({});
  const auth = getAuth();
  const googleprovider = new GoogleAuthProvider();

  const googleSignIn = () => {
    return signInWithPopup(auth, googleprovider);
  };

  const logOut = () => {
    signOut(auth).then(() => {
      setuser({});
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user);
      }
    });
  }, []);

  return {
    user,
    googleSignIn,
    logOut,
  };
};
export default useFirebase;
