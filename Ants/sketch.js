var ants = [];
var colour = [];

function setup() {
	createCanvas(800, 800);
	background(51);
	// for (var i = 0; i < 800; i++) {
	// 	colour[0] = random(255);
	// 	colour[1] = random(255);
	// 	colour[2] = random(255);
	// 	var ant = new Ant(random(width), random(height), colour);
	// 	ants[i] = ant;
	// 	ants[i].show();
	// }
	for (var i = 0; i < width; i++) {
		var ant = new Ant(i, 0, newColour());
		ants[i] = ant;
		ants[i].show();
	}
}


function draw() {
	for (i = ants.length-1; i >= 0 ; i--) {
		if (ants[i].y >= height) {
			ants.splice(i, 1);
		} else {
			ants[i].show();
			//var randx = random(-2, 2);
			var randx = 0;
			var randy = random(2);
			ants[i].move(randx, randy);
			colour[0] = map(ants[i].y, 0, height, 0, 255);
			colour[1] = map(ants[i].y, 0, height, 0, 255);
			colour[2] = map(ants[i].y, 0, height, 0, 255);
		}
	}
	// colour[0] += 0.3;
	// colour[1] += 0.3;
	// colour[2] += 0.3;

}

function newColour() {
	var r = random(255);
	var g = random(200);
	var b = random(150);
	return [r, g, b];
}
