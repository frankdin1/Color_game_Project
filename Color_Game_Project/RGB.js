var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay")
var rgb = [];
function randomColor(){
	var red = [];
	var green = [];
	var blue = [];
	
	for (var i = 0; i < squares.length; i++){
		red[i] = Math.floor(Math.random()*255)
		green[i] = Math.floor(Math.random()*256)
		blue[i] = Math.floor(Math.random()*256)
		rgb[i] = "rgb(" + red[i] + ", " + green[i] + ", " + blue[i] + ")";
	}
	return rgb[Math.floor(Math.random()*squares.length)];
}

var pickedColor = randomColor();
colorDisplay.innerHTML = pickedColor
console.log(pickedColor)
for (var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = rgb[i];
}