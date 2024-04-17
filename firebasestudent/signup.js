import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

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
    window.location.href = 'student.html';
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    
  });
})