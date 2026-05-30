import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "movie-theater-app-fe0ae.firebaseapp.com",
  projectId: "movie-theater-app-fe0ae",
  storageBucket: "movie-theater-app-fe0ae.firebasestorage.app",
  messagingSenderId: "468236897628",
  appId: "1:468236897628:web:ffcf35b9c777964df3c599"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
