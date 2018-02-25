var filtering = 0;
var filtersArr = ["Schools-filter-box", "Environment-filter-box", "Politics-filter-box", "Arts-filter-box", "Sports-filter-box", "Other-filter-box"]

document.getElementById("Schools-filter-box").onclick = function(){adjFilter("Schools-filter-box")};
document.getElementById("Environment-filter-box").onclick = function(){adjFilter("Environment-filter-box")};
document.getElementById("Politics-filter-box").onclick = function(){adjFilter("Politics-filter-box")};
document.getElementById("Arts-filter-box").onclick = function(){adjFilter("Arts-filter-box")};
document.getElementById("Sports-filter-box").onclick = function(){adjFilter("Sports-filter-box")};

// THIS IS NEW STUFF (2/25)!!!!! (NOTE ADDED "Other-Filter-Box" to filtersArr as well!)
var newPosted = false;

document.getElementById("Other-filter-box").onclick = function(){adjFilter("Other-filter-box")};

document.getElementById("s-np").onclick = submitNewPost;
document.getElementById("man-butt").onclick = startNewPost;
document.getElementById("c-np").onclick = cancelNewPost;

function startNewPost(){
	document.getElementById("that-box-thing").style.display = "initial";
}

function cancelNewPost(){
	document.getElementById("that-box-thing").style.display = "none";
	document.getElementById("np-sub").value = "";
	document.getElementById("np-cont").value = "";
}

function submitNewPost(){
	var topics = document.getElementsByName("topic");
	var top;
	for(var i = 0; i < topics.length; i++){
		if(topics[i].checked) {
			top = topics[i].value;
			break;
		}
	}
	document.getElementById("New-post-cb").classList.add(top);

	var subjectLine = document.getElementById("np-sub").value;
	var content = document.getElementById("np-cont").value;
	document.getElementById("np-subline").innerHTML = subjectLine;
	document.getElementById("np-content").innerHTML = content;

	document.getElementById("New-post-b").style.display = "initial";
	document.getElementById("that-box-thing").style.display = "none";

	newPosted = true;
}
// NEW STUFF (2/25) ENDS HERE for now!!!!

function adjFilter(filterID){
	if(filtering == 0) {
		startFiltering();
	}
	var el = document.getElementById(filterID);
	if(el.value == 0){
		el.value = 1;
	} else {
		el.value = 0;
	}
	checkIfClear();
	filter();
}

function startFiltering(){
	for(i = 0; i < filtersArr.length; i++){
		document.getElementById(filtersArr[i]).value = 0;
	}
	filtering = 1;
}

function filter(){
	// NEW STUFF (2/25) HERE, TOO!!!!
	var dispNP = false;
	var topics = document.getElementsByName("topic");
	var top;
	for(var i = 0; i < topics.length; i++){
		if(topics[i].checked) {
			top = topics[i].value;
			break;
		}
	}
	// NEW Stuff (2/25) ends here for now
	for(i = 0; i < filtersArr.length; i++){
		var elName = filtersArr[i];
		console.log(elName);
		if(document.getElementById(elName.substring(0, elName.length - 11))){
			if(document.getElementById(elName).value == 0){
				document.getElementById(elName.substring(0, elName.length - 11)).style.display = "none";
			} else {
				document.getElementById(elName.substring(0, elName.length - 11)).style.display = "inline";
			}
		}
		// also new (2/25)
		if((top+"-box") == elName){
			if(document.getElementById(elName).value == 1){
				dispNP = true;
			}
		}
		// end new stuff (2/25) for now
	}
	
	// more new stuff (2/25)
	if(newPosted && dispNP) {
		document.getElementById("New-post-b").style.display = "inline";
	} else {
		document.getElementById("New-post-b").style.display = "none";
	}
	// Final end new stuff (2/25)
}

function checkIfClear(){
	var n = 0;
	for(i = 0; i < filtersArr.length; i++){
		n = document.getElementById(filtersArr[i]).value + n;
	}

	if(n == 0){
		clearAndEndFiltering();
	}
}

function clearAndEndFiltering(){
	for(i = 0; i < filtersArr.length; i++){
	document.getElementById(filtersArr[i]).value = 1;
	}
	filtering = 0;
}
