import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = createUserWithEmailAndPassword(auth, (currentUser) => {
      console.log("user in the auth state change", currentUser);
      setUser(currentUser);
    });
    return () => {
      unSubscribe;
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    logOut,
    signIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Authprovider;
