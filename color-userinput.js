var inputOne = document.getElementById("colorOne");
var inputTwo = document.getElementById("colorTwo");
var colorSet = document.querySelector("h3");
// var body = document.getElementById("gradient");

 
function changeColor() {
		document.body.style.background = 
		'linear-gradient(to right, '
		+inputOne.value
		+", "
		+inputTwo.value
		+")";
		displayHex();
};

function displayHex(){
	colorSet.textContent = ("the picked colors are "
		+ inputOne.value
		+ " and " 
		+ inputTwo.value);
};

inputOne.addEventListener("input", changeColor);
inputTwo.addEventListener("input", changeColor);