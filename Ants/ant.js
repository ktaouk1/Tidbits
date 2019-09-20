class Ant {
	constructor(x, y, colour) {
		this.x = x;
		this.y = y;
		this.colour = colour;
	}

	show() {
		strokeWeight(2);
		stroke(colour[0], colour[1], colour[2]);
		fill(colour[0], colour[1], colour[2]);
		point(this.x, this.y);
	}

	move(x, y) {
		this.x += x;
		this.y += y;
	}
}
