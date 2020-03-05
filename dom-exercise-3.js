document.onmousemove = function() {
	let el = document.createElement('div');
	el.style.top = event.clientY + 'px';
	el.style.left = event.clientX + 'px';
};
