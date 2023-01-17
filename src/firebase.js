import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBxdtAwjvgdngTt-s5TrFYmfaVVO1jRTBQ",
  authDomain: "itech-labs.firebaseapp.com",
  projectId: "itech-labs",
  storageBucket: "itech-labs.appspot.com",
  messagingSenderId: "225418653482",
  appId: "1:225418653482:web:c6cdfa619e976aa3773853",
  measurementId: "G-4T7QFZ9C9J"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
