import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseInitialise = () => {
  initializeApp(firebaseConfig);
};

export default firebaseInitialise;
