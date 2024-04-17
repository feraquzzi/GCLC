const firebaseConfig = {
    apiKey: "AIzaSyAmt3S3cuq7mDb72A39b3nwrx3eZ34ld6Q",
    authDomain: "adminportal-e7cb2.firebaseapp.com",
    databaseURL: "https://adminportal-e7cb2-default-rtdb.firebaseio.com",
    projectId: "adminportal-e7cb2",
    storageBucket: "adminportal-e7cb2.appspot.com",
    messagingSenderId: "518795882580",
    appId: "1:518795882580:web:494594eb4ae7e2a67f7dc1"
};

firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('Interests'); 

// Listen for form submit
document.getElementById('contact').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  //Get value
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var skill = getInputVal('skill');
  

  // Save message
  saveMessage(name, email, phone, skill);

  document.querySelector('.right-content').style.display = "none";

  document.querySelector('#formresult').innerHTML = "Your submission is been recieved...";
  
    document.getElementById('loader').style.display = "block";
 
  
  setTimeout(function(){
    document.querySelector('#formresult').innerHTML = "Register to show your interest in learning a new skill.";
    document.querySelector('.right-content').style.display = "block";
    document.getElementById('loader').style.display = "none";
  },3000);


  // Clear form
  document.getElementById('contact').reset();
  //console.log('hello')
}

// Function to get form value
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, skill){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    phone: phone,
    skill: skill
  });
}


