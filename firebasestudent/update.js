import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

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
  
  const user = auth.currentUser;

  function updateUserProfile(user){
    //const username = user.displayName;
    const userEmail = user.email;
    const userName = user.displayName;
    const profileImage = user.photoURL;
    //const userInitial = userEmail.substring(0, 1);
    //const userProfilePicture = user.photoURL;

    document.getElementById('welcomeMessage').textContent = 'Welcome,' + ' ' + userName;
    //document.getElementById('email').textContent = userEmail;
    document.getElementById('photoProfile').src = profileImage;

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

