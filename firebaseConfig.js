import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAJGWeMChBd-aTBB6CTd-KrWU-40SuVuc8",
  authDomain: "synergic-links.firebaseapp.com",
  projectId: "synergic-links",
  storageBucket: "synergic-links.firebasestorage.app",
  messagingSenderId: "1041185899219",
  appId: "1:1041185899219:web:5f6a8281208f2d5cbb4a26",
  measurementId: "G-G0LGZ4FSWY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
