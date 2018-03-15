document.getElementById("signupbtn").addEventListener("click", login);

function login(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username==="mayor" && password==="evanston"){
    dummySuccess();
  } else {
    failLogin();
  }
  if (username=== "" || password==""){}
  /*successLogin() here*/
 /* else {
    failLogin(); 
  } */
}

function dummySuccess(){
  console.log("successful Login!")
  document.signInForm.action = "https://chpmk98.github.io/dummyProfile.html"
  document.cookie="signedIn=true";
}

function successLogin(){
  /*this will be filled in when we figure out how */
}

function failLogin(){
  console.log("unsuccessful login!")
  alert("Incorrect Username or Password");
}
