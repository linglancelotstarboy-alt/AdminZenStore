// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAJidotp4Dg5uAlfvMXxbKBvMk89w--h58",
  authDomain: "voizzen-serenity.firebaseapp.com",
  databaseURL: "https://voizzen-serenity-default-rtdb.firebaseio.com",
  projectId: "voizzen-serenity",
  storageBucket: "voizzen-serenity.firebasestorage.app",
  messagingSenderId: "693574974357",
  appId: "1:693574974357:web:50fc05423ccdbd1ee1d49c",
  measurementId: "G-4TN15N5JQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export
export { app, analytics, db };