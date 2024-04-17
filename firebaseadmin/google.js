import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

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
  auth.languageCode = 'en';
  const provider = new GoogleAuthProvider();

  const googleLogin = document.getElementById('google');
  googleLogin.addEventListener('click', function(){
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        console.log(user);
        window.location.href = 'admin.html';

    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    })
  })

 
 