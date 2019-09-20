var dots = [];
var r = 0;
var g = 0;
var b = 0;
var forward = true;

function setup() {
	createCanvas(800, 800);
	background(51);
	stroke(255);
	strokeWeight(8);

	// 420 dots
	var count = 0;
	for (var i = 0; i < width/40; i++) {
		for (var j = 0; j < height/40; j++) {
			updateColour();
			var dot = new Dot(count, 40*j+20, 40*i+20, 5);
			dot.show();
			dots.push(dot);
			count++;
		}
		count++;
	}

}

function draw() {
	
}

function updateColour() {
	if (forward) {
		if (r < 255 && g < 255 && b < 255) {
			r++;
			g++;
			b++;
		} else {
			r = 255;
			g = 255;
			b = 255;
			forward = false;
		}
	} else {
		if (r > 0 && g > 0 && b > 0) {
			r--;
			g--;
			b--;
		} else {
			r = 0;
			g = 0;
			b = 0;
			forward = true;
		}
	}
	stroke(r, g, b);
	fill(r, g, b);
}

function mousePressed() {
	for (var i = 0; i < dots.length; i++) {
		dots[i].clicked();
	}
}

function mouseDragged() {

}
