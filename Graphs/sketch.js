/* 
	Visualise some mathematical sequences and patterns with Plotly.
	Inspired by Numberphile's 'Amazing Graphs' series on YouTube, linked below.

	-> https://www.youtube.com/playlist?list=PLt5AfwLFPxWLkoPqhxvuA8183hh1rBnGM
*/

var maxIter = 2000;
var counter = 0;

function setup() {
	var form = document.getElementById("options").addEventListener("change", function(e) {
		var config = {
			scrollZoom: true,
			displayModeBar: true,
			responsive: true
		}
		var graph = document.getElementById("graph");

		// Clear the message and previous graph
		if (counter > 0) {
			Plotly.deleteTraces(graph, 0);
		} else if (counter == 0) {
			document.getElementById("msg").outerHTML = "";
		}

		if (e.target.value == "flystraight") {
			var layout = {
		    	title: 'Fly Straight, Dammit!',
		    	showlegend: false,
				dragmode: "pan",
				colorway: ["rgba(144, 78, 149, 0.82)"]
			}
			var data = flyStraight();
			if (counter == 0) {
				Plotly.plot(graph, [data], layout, config);
				counter++;
			} else {
				Plotly.relayout(graph, layout);
				Plotly.addTraces(graph, [data]);
			}
		} else if (e.target.value == "wisteria") {
			var layout = {
		    	title: 'Wisteria',
		    	showlegend: false,
				dragmode: "pan",
				colorway: ["rgba(245 ,98 ,23, 0.82)"]
			}
			var data = wisteria();
			if (counter == 0) {
				Plotly.plot(graph, [data], layout, config);
				counter++;
			} else {
				Plotly.relayout(graph, layout);
				Plotly.addTraces(graph, [data]);
			}
		} else if (e.target.value == "recaman") {
			var layout = {
		    	title: 'Recamán',
		    	showlegend: false,
				dragmode: "pan",
				colorway: ["rgba(203 ,48 ,102, 0.82)"]
			}
			var data = recaman();
			if (counter == 0) {
				Plotly.plot(graph, [data], layout, config);
				counter++;
			} else {
				Plotly.relayout(graph, layout);
				Plotly.addTraces(graph, [data]);
			}
		} else if (e.target.value == "pascal") {
			var layout = {
		    	title: 'Pascal\'s Triangle (log)',
		    	showlegend: false,
				dragmode: "pan",
				colorway: ["rgba(116, 156, 44, 0.82)"]
			}
			var data = pascal();
			if (counter == 0) {
				Plotly.plot(graph, [data], layout, config);
				counter++;
			} else {
				Plotly.relayout(graph, layout);
				Plotly.addTraces(graph, [data]);
			}
		} else if (e.target.value == "phi") {
			var layout = {
		    	title: 'Phi Ratio',
		    	showlegend: false,
				dragmode: "pan",
				colorway: ["rgba(71, 105, 133, 0.82)"]
			}
			var data = phi();
			if (counter == 0) {
				Plotly.plot(graph, [data], layout, config);
				counter++;
			} else {
				Plotly.relayout(graph, layout);
				Plotly.addTraces(graph, [data]);
			}
		} else if (e.target.value == "stern") {
			var layout = {
				title: 'Stern-Brocot Sequence',
				showlegend: false,
				dragmode: "pan",
				colorway: ["rgba(119, 191, 163, 0.82)"]
			}
			var data = stern();
			if (counter == 0) {
				Plotly.plot(graph, [data], layout, config);
				counter++;
			} else {
				Plotly.relayout(graph, layout);
				Plotly.addTraces(graph, [data]);
			}
		} else if (e.target.value == "hofstadter") {
			var layout = {
				title: 'Hofstadter Q-Sequence',
				showlegend: false,
				dragmode: "pan",
				colorway: ["rgba(164, 57, 49, 0.82)"]
			}
			var data = hofstadter();
			if (counter == 0) {
				Plotly.plot(graph, [data], layout, config);
				counter++;
			} else {
				Plotly.relayout(graph, layout);
				Plotly.addTraces(graph, [data]);
			}
		}
	});
}


/* 
	Functions for calculating each sequence
*/


// Calculate the Fly Straight, Dammit! sequence
function flyStraight() {
	var xcoords = [];
	var ycoords = [];
	for (var i = 0; i < maxIter; i++) {
		xcoords.push(i);
		if (i == 0 || i == 1) {
			ycoords.push(1);
		} else {
			if (checkCoprimeNum(ycoords[i-1], i)) {
				ycoords.push(ycoords[i-1] + i + 1);
			} else {
				ycoords.push(ycoords[i-1] / gcd(ycoords[i-1], i));
			}
		}
	}
	var data = {
		x: xcoords,
		y: ycoords,
		mode: 'markers',
		type: 'scatter'
	}
	return data;
}

// Calculate the Wisteria sequence
function wisteria() {
	var xcoords = [];
	var ycoords = [];
	for (var i = 0; i < maxIter; i++) {
		var sum = 1;
		xcoords.push(i);
		var constituents = i.toString().split("");
		for (var index = 0; index < constituents.length; index++) {
			if (parseInt(constituents[index], 10) > 0) {
				sum *= constituents[index]
			}
		}
		ycoords.push(i - sum)
	}
	var data = {
		x: xcoords,
		y: ycoords,
		mode: 'markers',
		type: 'scatter'
	}
	return data;
}

// Calculate the Recaman sequence
function recaman() {
	var xcoords = [];
	var ycoords = [];
	for (var i = 0; i < maxIter; i++) {
		xcoords.push(i);
		if (i == 0) {
			ycoords.push(0);
		} else {
			var temp = ycoords[i-1] - i;
			if (temp > 0 && !ycoords.includes(temp)) {
				ycoords.push(temp);
			} else {
				ycoords.push(ycoords[i-1] + i);
			}
		}
	}
	var data = {
		x: xcoords,
		y: ycoords,
		mode: 'markers',
		type: 'scatter'
	}
	return data;
}

// Calculate Pascal's Triangle sequence (log-transformed)
function pascal() {
	var xcoords = [];
	var ycoords = [];
	for (var i = 0; i < 100; i++) {
		xcoords.push(i);
		for (var k = 0; k <= i; k++) {
			var coeff = Math.log(factorial(i,1) / (factorial(k,1) * factorial(i-k,1)));
			ycoords.push(coeff);
		}
	}
	for (var i = xcoords.length-1; i < ycoords.length-1; i++) {
		xcoords.push(i);
	}
	var data = {
		x: xcoords,
		y: ycoords,
		mode: 'markers',
		type: 'scatter'
	}
	return data;
}

// Calculate the Phi ratio as a sequence
function phi() {
	var xcoords = [];
	var ycoords = [];
	var turnFraction = (1 + Math.sqrt(5)) / 2;
	for (var i = 0; i < maxIter; i++) {
		var dist = i*i / (maxIter - 1);
		var angle = 2 * Math.PI * turnFraction * i;
		var x = dist * Math.cos(angle);
		var y = dist * Math.sin(angle);

		xcoords.push(x);
		ycoords.push(y);
	}
	var data = {
		x: xcoords,
		y: ycoords,
		mode: 'markers',
		type: 'scatter'
	}
	return data;
}

// Calculate the Stern-Brocot sequence
function stern () {
	var xcoords = [];
	var ycoords = [];
	xcoords.push(0, 1);
	ycoords.push(0, 1);
	for (var i = 1; i < maxIter*3; i++) {
		xcoords.push(i+1);
		ycoords[i*2] = ycoords[i];
		ycoords[i*2+1] = ycoords[i] + ycoords[i+1];
	}
	var data = {
		x: xcoords,
		y: ycoords,
		mode: 'markers',
		type: 'scatter'
	}
	return data;
}

// Calculate Hofstadter's Q-Sequence
function hofstadter () {
	var xcoords = [];
	var ycoords = [];
	for (var i = 0; i < maxIter*3; i++) {
		if (i == 0) {
			xcoords.push(NaN);
			ycoords.push(NaN);
		} else {
			xcoords.push(i);
			if (i == 1 || i == 2) {
				ycoords.push(1);
			} else {
				ycoords.push(ycoords[i - ycoords[i - 1]] + ycoords[i - ycoords[i - 2]]);
			}
		}
	}
	var data = {
		x: xcoords,
		y: ycoords,
		mode: 'markers',
		type: 'scatter'
	}
	return data;
}


/*
	AUXILIARY FUNCTIONS
*/


// Calculate the factorial of n, i.e. find n!
function factorial (n, sum) {
	if (n == 0 || n == 1) {
		return sum;
	} else if (n > 1) {
		sum *= n;
		return factorial(n-1, sum);
	}
}

// Check if two numbers are coprime
function checkCoprimeNum(a,b){
	if (b===1) {
		return true;
	}
	if (!(a % b)) {
		return false;
	} else {
		return checkCoprimeNum(b, a%b);
	}
}

// Find the greatest common denominator from two numbers
function gcd(x, y) {
	while (y) {
		var t = y;
		y = x % y;
		x = t;
	}
	return x;
}
