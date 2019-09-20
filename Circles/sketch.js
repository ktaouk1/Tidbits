var segments = [];
var d = 20;
var angle = 0.001;
var layers = 41;
var speed = 3;
var backwards = false;
var iter = 0;

function setup() {
	createCanvas(800, 800);
	background(51);
	stroke(255);
	strokeWeight(3);
	noFill();
	angleMode(DEGREES);
	for (i = 0; i < layers; i++) {
		var seg = new Segment(width/2, height/2, d*i);
		segments.push(seg);
	}
	stroke(255);
	point(width/2, height/2);
}

function draw() {
	// Draw the arcs
	for (i = 0; i < segments.length; i++) {
		if (!backwards) {
			var n = map(i, 0, segments.length, 255, 0);
		} else {
			var n = 51;
		}
		segments[i].update(angle, n);
	}
	// Reverse the direction
	if (angle == 360) {
		iter++;
		angle = 0.001;
		if (iter % 2 == 1) {
			//stroke(51);
			backwards = true;
		} else if (iter % 2 == 0) {
			backwards = false;
		}

	}
	// Increase angle
	if (angle + speed > 360) {
		angle = 360;
	} else {
		angle += speed;
	}
}
