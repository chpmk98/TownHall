/*
	This JS is for replying on the NU Property Tax Community Forum thread
*/

inputField = document.getElementsByTagName("input")[0];

inputField.addEventListener("keyup", function(event) {

	event.preventDefault();

	if(event.keyCode === 13) {
		document.getElementById("yourTextBody").innerHTML = inputField.value;
		document.getElementById("yourReply").style.display = "initial";
		inputField.value = "";
	}
});

// This function runs immediately upon opening the page
(function() {
	console.log("signedIn cookie value is: " + getCookie("signedIn"));

	// Modifies the headbar depending on who's signed in
	if(getCookie("signedIn") === "mayor") {
		document.getElementById("TtYCO").style.display = "none";
		document.getElementById("signIn").style.display = "none";
		document.getElementById("MaCA").style.display = "initial";
		document.getElementById("myInterests").style.display = "initial";
		document.getElementById("mayorProfile").style.display = "initial";
		document.getElementsByClassName("signInPrompt")[0].style.display = "none";
	} else if(getCookie("signedIn") === "rebmeistro") {
		document.getElementById("signIn").style.display = "none";
		document.getElementById("myInterests").style.display = "initial";
		document.getElementById("rebProfile").style.display = "initial";
		document.getElementsByClassName("signInPrompt")[0].style.display = "none";
	}
}) ();

/*
var num = 4;

for(var i = 0; i < num; i++) {
	document.getElementById("rb-"+i).addEventListener("click", openReply);
	document.getElementById("sb-"+i).addEventListener("click", submitReply);
	document.getElementById("cb-"+i).addEventListener("click", cancelReply);
}

function openReply() {
	var index = this.id.slice(-1);
	document.getElementById("NUProperty-r-main-"+index).style.display = "initial";
}

function submitReply() {
	var index = this.id.slice(-1);
	var text = document.getElementById("NUProperty-r-main-body-"+index).value;
	document.getElementById("NUProperty-r-main-"+index).style.display = "none";
	document.getElementById("NUProperty-nr-body-"+index).innerHTML = text;
	document.getElementById("NUProperty-nr-"+index).style.display = "initial";
	borderChange(index); // New line...
}

function cancelReply() {
	var index = this.id.slice(-1);
	document.getElementById("NUProperty-r-main-body-"+index).value = "";
	document.getElementById("NUProperty-r-main-"+index).style.display = "none";
}

function borderChange(index){
	document.getElementById("NUProperty-nr-"+index).style.borderTop = "0px";
	var i = parseInt(index)+1;
	document.getElementById("NUProperty-r-main-body-"+i).style.borderTop = "5px";
}
*/