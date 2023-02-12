import React, { useState, useEffect } from "react";
import app, { auth } from "./firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // app.auth().onAuthStateChanged((user) => {
    //   setCurrentUser(user);
    // });
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setCurrentUser(user);
        console.log("uid", uid);
      } else {
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
