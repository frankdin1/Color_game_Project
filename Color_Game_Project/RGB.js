var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var resultDisplay = document.querySelector("#resultDisplay");
var newColors = document.querySelector("#newColors");
var titleBar1 = document.querySelector("#title-bar-1");
var easyMode = document.querySelector("#easy");
var hardMode = document.querySelector("#hard");

easyMode.addEventListener("click", function(){
	hard.classList.remove("selected");
	easy.classList.add("selected");
});

hardMode.addEventListener("click", function(){
	easy.classList.remove("selected");
	hard.classList.add("selected");
});

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

function assignColors(){
	for (var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = rgb[i];
	}
}

var pickedColor = randomColor();
titleBar1.style.backgroundColor = "blue";
//console.log("Initial value of pickedColor: "+pickedColor);

newColors.addEventListener("click", function(){
	newColors.innerHTML = "New Colors";
	titleBar1.style.backgroundColor = "blue";
	var pickedColor = randomColor();
	//console.log("value of picedColor inside reset event listener: "+pickedColor);
	colorDisplay.innerHTML = pickedColor
	assignColors();
});		

colorDisplay.innerHTML = pickedColor;
//console.log("third value of pickedColor: "+pickedColor);

//console.log(pickedColor)
for (var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = rgb[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor){
			resultDisplay.innerHTML = "Correct";
			for (var i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = pickedColor;
			}
			newColors.innerHTML = "PLAY AGAIN?";
			titleBar1.style.backgroundColor = pickedColor;
		}
		else{
			resultDisplay.innerHTML = "Try Again!!";
			this.style.backgroundColor = "#232323";
		}

	})
}