import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

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

const signinbutton = document.getElementById('button');

signinbutton.addEventListener('click', (event) =>{
    //prevent normal form behaviour 
    event.preventDefault();
    // Confirm that the button is working
    console.log('Button Clicked');

    //Grab the entered user email and password
    const userEmail = document.getElementById('email').value;
    const userPassword = document.getElementById('password').value;

    //create the user account with the email and password
    signInWithEmailAndPassword(auth, userEmail, userPassword)
    .then((userCredential) => {

        //alert('User Created and Signed in Successfully');

        const user = userCredential.user;
        console.log('user', user.email);
        window.location.href = "admin.html";
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);
    });
});