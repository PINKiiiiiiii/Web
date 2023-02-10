import React, { useState, useEffect } from "react";
import app, { auth } from "./firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // firebaseConfig.auth().onAuthStateChanged((user) => {
    //   setCurrentUser(user);
    // });
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        setCurrentUser(user);
        console.log("uid", uid);
      } else {
        // User is signed out
        // ...
        console.log("user is logged out");
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
