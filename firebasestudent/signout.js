import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

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


let logOut = document.querySelector('.studentLogout');

const signOutButtonPressed = async(e) => {
    e.preventDefault();
    try {
        await signOut(auth);
        alert("User Signed Out Successfully!");
        window.location.href = 'adminauth.html';
      } catch (error) {
        console.log(error.code);
      }
};

logOut.addEventListener("click", signOutButtonPressed);