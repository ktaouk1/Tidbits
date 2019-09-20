var snowflakes = [];
var maxFlakes = 350;

function setup() {
	createCanvas(windowWidth, windowHeight);

	for (var i = 0; i < maxFlakes; i++) {
		var x = Math.floor(random(0, width));
		var y = Math.floor(random(0, height));
		var radius = Math.floor(random(5, 20));
		var colour = map(radius, 5, 20, 50, 225);

		snowflakes.push({x: x, y: y, r: radius, c: `rgb(${colour}, ${colour}, ${colour})`});
	}
}

function draw() {
	background('rgba(25, 25, 25, 0.7)');
	for (var i = 0; i < snowflakes.length; i++) {
		//snowflakes[i].x -= map(snowflakes[i].r, 5, 20, 1, 5) / 2;
		snowflakes[i].x -= map(mouseX, 0, windowWidth, 8, -8) * Math.sqrt(snowflakes[i].r/2);
		//snowflakes[i].y += map(snowflakes[i].r, 5, 20, 1, 5);
		snowflakes[i].y -= map(mouseY, 0, windowHeight, -2, -8) * Math.sqrt(snowflakes[i].r/4);

		if (snowflakes[i].x > windowWidth + snowflakes[i].r) {
			snowflakes[i].x = 0;
		}
		if (snowflakes[i].x < 0 - snowflakes[i].r) {
			snowflakes[i].x = windowWidth;
		}
		if (snowflakes[i].y > windowHeight + snowflakes[i].r) {
			snowflakes[i].y = 0;
		}
		if (snowflakes[i].y < 0 - snowflakes[i].r) {
			snowflakes[i].y = windowHeight;
		}

		stroke(snowflakes[i].c);
		strokeWeight(snowflakes[i].r);
		point(snowflakes[i].x, snowflakes[i].y);
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
