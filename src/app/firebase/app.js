
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBiwPVIoG6PqaQIcPS4VH3nFkh-EGY80nM",
  authDomain: "arthahub-98fb6.firebaseapp.com",
  projectId: "arthahub-98fb6",
  storageBucket: "arthahub-98fb6.firebasestorage.app",
  messagingSenderId: "849984670637",
  appId: "1:849984670637:web:aeb3cbeeb8df72599aaf24",
  measurementId: "G-ZTDJMR51ZW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);