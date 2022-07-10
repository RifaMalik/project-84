// Create a reference for the canvas
canvas = document.getElementById ('myCanvas');
ctx = canvas.getContext ("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event
window.addEventListener("keydown",my_keydown)
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
			document.getElementById("d1").innerHTML="You pressed Alphabet key";
		}
		//write a code to check the type of key pressed
		
	else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
		console.log("otherkey");
	}
	if((keyPressed >=48 && keyPressed<=57)){
		document.getElementById("d1").innerHTML="You pressed Number key";
	}

	if((keyPressed >=37 && keyPressed<=40)){
		document.getElementById("d1").innerHTML="You pressed Arrow key";
	}

	if((keyPressed >=17)){
		document.getElementById("d1").innerHTML="You pressed Special key";
	}

	if((keyPressed >=18)){
		document.getElementById("d1").innerHTML="You pressed Special key";
	}

	if((keyPressed >=19)){
		document.getElementById("d1").innerHTML="You pressed Special key";
	}
}

function aplhabetkey()
{
	//upload respective image with the message. 
     img_image="Alpkey.png";
	 add();
}
function numberkey()
{
	img_image="numkey.png";
	 add();
}
function arrowkey()
{
	img_image="Arrkey.png";
	 add();
}
function specialkey()
{
	img_image="spkey.png";
	 add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
