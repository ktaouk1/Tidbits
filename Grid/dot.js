class Dot {
	constructor(id, x, y, r) {
		this.id = id;
		this.x = x;
		this.y = y;
		this.r = r;
	}

	show() {
		strokeWeight(4);
		ellipse(this.x, this.y, this.r * 2);
	}

	clicked() {
		var d = dist(this.x, this.y, mouseX, mouseY);
		if (d <= this.r) {
			console.log("DOT", this.id, "HAS BEEN CLICKED");
			for (var i = 0; i < dots.length; i++) {
				if (dots[i].id == this.id) {
					console.log("REMOVED DOT", this.id);
					dots.splice(i, 1);
				}
			}
		}
	}
}
