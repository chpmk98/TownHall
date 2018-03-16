
// These values are here in case we want to change them later
var savedButtText = "Unsave"
var notSavedButtText = "Save for Later"
var cookieMinutes = 10; // Determines how long the banner stays dismissed

// These are handy arrays I use in multiple functions
var allPosts = document.getElementsByClassName("aPost");
var filterChecks = document.getElementsByClassName("container");
var saveButts = document.getElementsByClassName("postSave");
// Note: Cookies for the save status of each post are called "savedPCi",
// where i is the index of the post in the list


// This function runs immediately upon opening the page
(function() {

	// Filters the page by what is already entered (useful when
	// nagivating to this page with the back button)
	doTheFilter();
	console.log("Should be filtered!");

	// This if statement hides the banner if it has already been closed
	if(getCookie("homePagePrompt") === "dismissed") {
		document.getElementsByClassName("signInPrompt")[0].style.display = "none";
	}

	console.log("signedIn cookie value is: " + getCookie("signedIn"));

	// Modifies the headbar depending on who's signed in
	if(getCookie("signedIn") === "mayor") {
		document.getElementById("TtYCO").style.display = "none";
		document.getElementById("signIn").style.display = "none";
		document.getElementById("MaCA").style.display = "initial";
		document.getElementById("mayorProfile").style.display = "initial";
		document.getElementById("pageActionButton").style.display = "initial";
		document.getElementsByClassName("signInPrompt")[0].style.display = "none";
	} else if(getCookie("signedIn") === "rebmeistro") {
		document.getElementById("signIn").style.display = "none";
		document.getElementById("myInterests").style.display = "initial";
		document.getElementById("rebProfile").style.display = "initial";
		document.getElementById("pageActionButton").style.display = "initial";
		document.getElementsByClassName("signInPrompt")[0].style.display = "none";
	} else {
		document.getElementById("evanstonLoc").style.display = "initial";
		document.getElementById("curCity").style.display = "none";    
	}


	for(var i = 0; i < saveButts.length; i++) {
		// Adds clicking functionality to each save button
		saveButts[i].addEventListener("click", clickSaveButton);

		// Adjusts the label to "Saved" if the post is already saved
		if(getCookie("savedPC"+i) === savedButtText) {
			saveButts[i].innerHTML = savedButtText;
		}
	}
}) ();

// Closing the banner keeps it closed for 10 minutes, even if you leave
// the page and return.
document.getElementById("dismissPrompt").onclick = function() {
	document.getElementsByClassName("signInPrompt")[0].style.display = "none";
	var time = new Date();
	time.setTime(time.getTime() + (cookieMinutes*60*1000));
	document.cookie = "homePagePrompt=dismissed; expires="+time.toUTCString();
}

// Called when a save button is clicked. Changes the innerHTML of the button
// and updates the saved cookies.
function clickSaveButton() {
	if(this.innerHTML === savedButtText) {
		this.innerHTML = notSavedButtText;
	} else {
		this.innerHTML = savedButtText;
	}

	updateAllSavedPCs();
}

// Updates all the cookies of savedPCs, since I am having trouble getting
// them to update on an individual basis
function updateAllSavedPCs() {
	for(var i = 0; i < saveButts.length; i++) {
		document.cookie = "savedPC"+i+"="+saveButts[i].innerHTML;
	}
}

// Shows all the posts and unchecks all the filter check boxes
document.getElementById("resetFilter").onclick = function() {
	showAllPosts();
	for(var i = 0; i < filterChecks.length; i++) {
		filterChecks[i].getElementsByTagName("input")[0].checked = false;
	}
}

// Shows only posts that are in the checked topics/types
// If there is no type selected, there is no filtering
// done by type. Similarly, if no topic is selected, there
// is no filtering done by topic.
document.getElementById("startFilter").addEventListener("click", doTheFilter);

function doTheFilter() {
	hideAllPosts();
	
	// Shows all the posts of the checked topics
	var numTopics = 0;
	for(var i = 2; i < filterChecks.length; i++) {
		if(filterChecks[i].getElementsByTagName("input")[0].checked) {
			var topicName = filterChecks[i].id;
			var postName = topicName.substring(0, topicName.length - 5)+"Post";
			var topicalPosts = document.getElementsByClassName(postName);
			
			for(var j = 0; j < topicalPosts.length; j++) {
				topicalPosts[j].style.display = "initial";
			}
			
			numTopics++;
		}
	}
	// If no topics were checked, show all the topics
	if(numTopics == 0) {showAllPosts();}

	// Sees how many type filters are checked
	var numTypes = 0;
	for(var i = 0; i < 2; i++) {
		if(filterChecks[i].getElementsByTagName("input")[0].checked) {numTypes++;}
	}

	// If either 0 or both type filters are checked, nothing is necessary.
	// Hides news or discussion posts if their boxes are unchecked
	if(numTypes == 1) {
		for(var i = 0; i < 2; i++) {
			if(!filterChecks[i].getElementsByTagName("input")[0].checked) {
				var iconName = filterChecks[i].getElementsByTagName("i")[0].classList[0];
			
				for(var j = 0; j < allPosts.length; j++) {
					if(allPosts[j].getElementsByTagName("i")[0].classList[0] == iconName) {
						allPosts[j].style.display = "none"
					}
				}
			}
		}
	}
	
}

// Hides all the posts
function hideAllPosts() {
	for(var i = 0; i < allPosts.length; i++) {
		allPosts[i].style.display = "none";
	}
}

// Shows all the posts
function showAllPosts() {
	for(var i = 0; i < allPosts.length; i++) {
		allPosts[i].style.display = "initial";
	}
}

// Takes a cookie label and returns the value stored in the cookie
// If there is no such cookie, returns ""
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}