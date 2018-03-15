document.getElementById("signupbtn").addEventListener("click", login);

function login(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username==="mayor" && password==="evanston"){
    loginMayor();
  } else if (username==="rebmeistro" && password=="EECS330ismyJAM!"){
    loginReb();
  } else {
    failLogin();
  }
}

function loginMayor(){
  document.signInForm.action = "https://chpmk98.github.io/dummyProfile.html"
  document.cookie="signedIn=mayor";
}

function loginReb(){
  document.signInForm.action = "https://chpmk98.github.io/myProfile.html"
  document.cookie="signedIn=rebmeistro";
}

function failLogin(){
  alert("Incorrect Username or Password");
}
