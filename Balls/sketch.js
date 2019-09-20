var balls = [];
var ax = -1;
var ay = 1;
// Bluish-gray
var palette = ['rgba(34, 45, 51, 0.82)', 'rgba(36, 56, 79, 0.82)', 'rgba(118, 152, 180, 0.82)', 'rgba(74, 94, 100, 0.82)', 'rgba(71, 105, 133, 0.82)'];
// Beige-Teal
var palette2 = ['rgba(237, 238, 201, 0.82)', 'rgba(221, 231, 199, 0.82)', 'rgba(191, 216, 189, 0.82)', 'rgba(152, 201, 163, 0.82)', 'rgba(119, 191, 163, 0.82)'];

function setup () {
	createCanvas(windowWidth, windowHeight);
}

function mousePressed () {
	var r = random(5, 100);
	var col = palette[Math.floor(Math.random() * palette.length)];
	balls.push({x: mouseX, y: mouseY, ax: random(-3, 3), ay: random(-3, 3), r, col});
}

function draw () {
	//background('rgba(255,255,255,0.1)');

	for (var i = 0; i < balls.length; i++) {
		balls[i].x += balls[i].ax;
		balls[i].y += balls[i].ay;

		if (balls[i].x > width - balls[i].r || balls[i].x < balls[i].r) {
			balls[i].ax *= -1;
		}
		if (balls[i].y > height - balls[i].r || balls[i].y < balls[i].r) {
			balls[i].ay *= -1;
		}

		fill(balls[i].col);
		ellipse(balls[i].x, balls[i].y, balls[i].r, balls[i].r);
	}
}


function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}
