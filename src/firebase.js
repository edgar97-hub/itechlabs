import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDe034KvLHnVDuDcJyQqc0BPNHndXhXDT0",
  authDomain: "itechflux.firebaseapp.com",
  projectId: "itechflux",
  storageBucket: "itechflux.appspot.com",
  messagingSenderId: "813139136604",
  appId: "1:813139136604:web:f4eb0035902ffbccd89699",
  measurementId: "G-K0NRLWW2SE",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
