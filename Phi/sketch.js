/*
	TODO --

*/


var points = [];
var numPoints = 1000;
var turnFraction = (1 + Math.sqrt(5)) / 2; // Use Phi for a sick pattern
var speed = 0.000002;
var tempSpeed = speed;
// Used for highlighting points
var offset = 0;
var highlight = 0;

function setup () {
	createCanvas(windowWidth, windowHeight);
	background(51);
	stroke("rgba(255, 255, 255, 0.8)");
	strokeWeight(3);

	// Add controls directly to the canvas
	button = createButton("Faster");
	button.position(50, height - 50);
	button.mousePressed(faster);
	button2 = createButton("Slower");
	button2.position(button.x + button.width + 10, height - 50);
	button2.mousePressed(slower);
	button3 = createButton("Start/Stop");
	button3.position(button2.x + button2.width + 10, height - 50);
	button3.mousePressed(startStop);
	button4 = createButton("RESET");
	button4.position(button3.x + button3.width + 10, height - 50);
	button4.mousePressed(reset);
	button5 = createButton("Cycle Patterns");
	button5.position(50, height - 80);
	button5.mousePressed(patterns);

	for (var i = 0; i < numPoints; i++) {
		var dist = i*i / (numPoints - 1);
		var angle = 2 * Math.PI * turnFraction * i;
		var x = dist * Math.cos(angle) + width/2;
		var y = dist * Math.sin(angle) + height/2;

		points.push({x: x, y: y});
	}
}

function draw () {
	background("rgba(51, 51, 51, 0.8)");
	for (var i = 0; i < numPoints; i++) {
		var dist = i*i / (numPoints - 1);
		var angle = 2 * Math.PI * turnFraction * i;
		var x = dist * Math.cos(angle) + width/2;
		var y = dist * Math.sin(angle) + height/2;

		points[i].x = x;
		points[i].y = y;
		if ((i + offset) % highlight == 0) {
			stroke("rgb(255, 167, 26)");
			strokeWeight(4);
		} else {
			stroke("rgba(255, 255, 255, 0.8)");
			strokeWeight(3);
		}
		point(x, y);
	}
	turnFraction += speed;
}

// Increase the speed by a fraction of itself, up to a limit
function faster () {
	var extra = speed * 0.3;
	if (speed + extra > 5 || speed == 0) {
		//empty
	} else {
		speed += extra;
	}
	tempSpeed = speed;
}

// Lessen the speed by a fraction of itself, up to a limit
function slower () {
	var extra = speed * 0.3;
	if (speed - extra < 0.000002) {
		speed = 0.000002;
	} else {
		speed -= extra;
	}
	tempSpeed = speed;
}

// Start and stop the animation
function startStop () {
	if (speed == 0) {
		speed = tempSpeed;
	} else {
		speed = 0;
	}
}

// Restore the default values for speed and Phi
function reset () {
	turnFraction = (1 + Math.sqrt(5)) / 2;
	if (speed == 0) {
		// Keep it frozen
		tempSpeed = 0.000002;
	} else {
		speed = 0.000002;
		tempSpeed = speed;
	}
}

function patterns () {
	if (highlight == 0 ) {
		highlight = 2;
	} else {
		highlight++;
	}
	highlight = highlight % 11;
	console.log(highlight);
}

function windowResized () {
	resizeCanvas(windowWidth, windowHeight);
	background(51);
}
