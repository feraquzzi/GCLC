import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, updateProfile } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

const firebaseConfig = {

    apiKey: "AIzaSyD3xrSfKw0qlMLSPj4e-r-xNdvdGE5EzMQ",
    authDomain: "studentportal-11156.firebaseapp.com",
    projectId: "studentportal-11156",
    storageBucket: "studentportal-11156.appspot.com",
    messagingSenderId: "743482690014",
    appId: "1:743482690014:web:7050ba88451ae082f0b54f"
    
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const editProfile = document.getElementById('editProfile');

editProfile.addEventListener('click', (event) => {
    event.preventDefault();

    const userEmail = document.getElementById('email').value;
    const photo = document.getElementById('profileImage').src;
    updateProfile(auth.currentUser, {
        email: userEmail, 
        photoURL: photo
      }).then(() => {

        alert('User Profile Updated');

        const user = userCredential.user;
        console.log('user', user.email);
        window.location.href = "student.html";
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      
        console.log(errorCode, errorMessage);
    });
})
