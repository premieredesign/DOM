const circle = document.querySelector('.circle');

// basic circle follow function
document.addEventListener('mousemove', function(e) {
	let x = e.clientX;
	let y = e.clientY;
	// style.left/top sets the position of an object from the left or top of a positioned div
	// the style attribute needs px to function, which is why we concatenate the 'px'
	circle.style.left = x + 'px';
	circle.style.top = y + 'px';
});
