function login(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if ( username == "mayor" && password == "Iamtheboss"){
    dummySuccess();
  }
  else {
    failLogin();
  }
}

function dummySuccess(){
  location = "dummyProfile.html";
}

function successLogin(){

}

function failLogin(){
  alert("Incorrect Username or Password");
}
