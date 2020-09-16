    firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;



  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });
 
}







function logout(){
  firebase.auth().signOut();
}

function sendverification() {
    var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
}).catch(function(error) {
  // An error happened.
});
}





function signup() {

    var email = document.getElementById("email2_field").value;
    var password = document.getElementById("password2_field").value;
    



    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});



}

function name() {

var name = document.getElementById("name_field").value;
var user = firebase.auth().currentUser;


  user.updateProfile({
  displayName: (name),
}).then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});
}



function OK() {



var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
}).catch(function(error) {
  // An error happened.
});
}



function dash() {
     window.location.href='index.html'
}





function Save() {

var auth = firebase.auth();
var emailAddress = ("email_field");

auth.sendPasswordResetEmail(emailAddress).then(function() {
  // Email sent.
}).catch(function(error) {
  // An error happened.
});
}
