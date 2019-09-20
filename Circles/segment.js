class Segment {
	constructor(x, y, d) {
		var initx = x;
		var inity = y;
		this.x = x;
		this.y = y;
		this.d = d;
	}

	update(angle, n) {
		stroke(n);
		arc(this.x, this.y, this.d, this.d, 0, angle);
	}




}
