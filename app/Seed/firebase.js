import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

function StartFirebase(){
  
  const firebaseConfig = {
    apiKey: "AIzaSyD3A1q1jZIeeEHk4xW_7ZSMVZo8-VvhAyM",
    authDomain: "flocker-devops.firebaseapp.com",
    projectId: "flocker-devops",
    storageBucket: "flocker-devops.appspot.com",
    messagingSenderId: "345621974893",
    appId: "1:345621974893:web:0a678cd6310474aad95464",
    measurementId: "G-QH4MH0CXRS"
  };
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  return getDatabase(app);
}

export default StartFirebase;
