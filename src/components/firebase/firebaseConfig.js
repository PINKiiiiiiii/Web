import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "redux-firestore";

const app = initializeApp({
  apiKey: "AIzaSyAEGzscVkPakxAkcoWnendb3-RgXiuo_2o",
  authDomain: "pode-2566.firebaseapp.com",
  projectId: "pode-2566",
  storageBucket: "pode-2566.appspot.com",
  messagingSenderId: "744534427443",
  appId: "1:744534427443:web:8220a7ac1d62c33995a046",
  measurementId: "G-M322HFVB1Y",
});

// const fire = initializeApp(app);
// export const db = getFirestore(fire);

export const auth = getAuth(app);
export default app;
