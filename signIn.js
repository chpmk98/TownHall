function login(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if ( username == "mayor" && password=="evanston"){
    dummySuccess();
  }
  if ( username == "" || password == ""){}
  /*successLogin() here*/
  else {
    failLogin();
  }
}

function dummySuccess(){
  location.href = "dummyProfile.html";
}

function successLogin(){
  /*this will be filled in when we figure out how */
}

function failLogin(){
  alert("Incorrect Username or Password");
}
