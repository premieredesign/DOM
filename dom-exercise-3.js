document.onmousemove = function(e) {
	// create variable for the circle
	// // for trails
	let circle = document.createElement('div');
	// let circle = document.queryCommandValue('.circle');

	// set x and y variables
	// clientX/Y gets the horizontal & vertical coordinates
	let x = e.clientX;
	let y = e.clientY;

	// style.left/top sets the position of an object from the left or top of a positioned div
	// the style attribute needs px to function, which is why we concatenate the 'px'
	circle.style.left = x + 'px';
	circle.style.top = y + 'px';

	// // ***comment out everything below this to remove trails
	// // set the class attribute for the div we created to circle
	circle.setAttribute('class', 'circle');
	// add the circle div to the page
	document.body.appendChild(circle);
	// // but remove it every .25 secs
	setTimeout(function() {
		document.body.removeChild(circle);
	}, 250);
};
