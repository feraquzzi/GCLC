import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAmt3S3cuq7mDb72A39b3nwrx3eZ34ld6Q",
    authDomain: "adminportal-e7cb2.firebaseapp.com",
    projectId: "adminportal-e7cb2",
    storageBucket: "adminportal-e7cb2.appspot.com",
    messagingSenderId: "518795882580",
    appId: "1:518795882580:web:494594eb4ae7e2a67f7dc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


let signUpButton = document.getElementById('signUp')
signUpButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault();
    console.log("clicked");

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    alert('account successfully created');
    
    const user = userCredential.user;
    console.log('user', user.email);
    window.location.href = 'admin.html';
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    
  });
})