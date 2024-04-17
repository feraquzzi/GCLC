import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyD3xrSfKw0qlMLSPj4e-r-xNdvdGE5EzMQ",
    authDomain: "studentportal-11156.firebaseapp.com",
    projectId: "studentportal-11156",
    storageBucket: "studentportal-11156.appspot.com",
    messagingSenderId: "743482690014",
    appId: "1:743482690014:web:7050ba88451ae082f0b54f"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let forgetPassword = document.getElementById('resetPassword');
let emailValue = document.getElementById('email');

forgetPassword.addEventListener("click", (e)=> {
    e.preventDefault();

    let email = emailValue.value;
  
    sendPasswordResetEmail(auth, email)
    .then(() => {
        alert('Password Reset Email Sent! Check Your Email');
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    alert(errorCode, errorMessage);
  });
});
