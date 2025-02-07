
//initialize firebase
firebase.initializeApp(firebaseConfig);

//auth firebase refs
const db = firebase.firestore();
const auth = firebase.auth();


//signup or create new user functionality
const signUpForm = document.querySelector('#signUpForm');
//Code for the sign up fuctionality
signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = signUpForm['email-signup'].value
  const password = signUpForm['password-signup'].value

  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    
    signUpForm.reset();
  });
  db.collection('Users').doc().set({
    UID: user.UID
  });

})





//login functionaility 
const loginform = document.querySelector('#loginForm');
loginform.addEventListener('submit', (e)=>{
  console.log("hello")
  e.preventDefault();

  const email = loginform['email-signin'].value
  const password = loginform['password-signin'].value

  auth.signInWithEmailAndPassword(email, password).then(cred => {

    //close login modal
    loginform.reset();

  }).then(function(result) {
    return result.user.updateProfile({
      displayName: document.getElementById("username-signup").value
    })
  })
  
})


//auth status change listener
auth.onAuthStateChanged(user => {
  if(user != null)
    window.location.href = "../Home Page/index.html";
})


const logindiv = document.getElementById('login-div')
const signupdiv = document.getElementById('signup-div')
//function to switch from sign up to sign in
function unhide(clickedButton) {
  
  if (clickedButton.value == 'Create New User') {
    logindiv.className = 'hidden';
    signupdiv.className = 'unhidden';
  }
  else{
    logindiv.className = 'unhidden';
    signupdiv.className = 'hidden';
  }
}
