import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

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
  auth.languageCode = 'en';
  const provider = new GoogleAuthProvider();

  const googleLogin = document.getElementById('google');
  googleLogin.addEventListener('click', function(){
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        console.log(user);
        window.location.href = 'student.html';

    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    })
  })

 
 