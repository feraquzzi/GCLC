import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

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

        alert('User Created and Signed in Successfully');

        const user = userCredential.user;
        console.log('user', user.email);
        window.location.href = "student.html";
    })
    .catch((error) => {
        alert('Wrong Login details');
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);
    });
});