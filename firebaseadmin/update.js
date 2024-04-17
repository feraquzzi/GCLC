import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

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
  
  const user = auth.currentUser;

  function updateUserProfile(user){
    //const username = user.displayName;
    const userEmail = user.email;
    const userInitial = userEmail.substring(0, 1);
    //const userProfilePicture = user.photoURL;

    document.getElementById('useremail').textContent = userInitial;

  }

 onAuthStateChanged(auth, (user) => {
    console.log(user);
    if (user) {
        updateUserProfile(user);
        const uid = user.uid;
        return uid;
    } else {
        window.location.href = 'index.html';
    }
});

