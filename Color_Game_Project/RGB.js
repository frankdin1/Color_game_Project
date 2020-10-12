var squares = document.querySelectorAll(".square");
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
	return rgb;
}

var pickedColor = randomColor();
//console.log(pickedColor)
for (var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = rgb[i];
}