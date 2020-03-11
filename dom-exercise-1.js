// Create and link a JavaScript file.

// Create a function named “main”. The HTML is already set up to
// call this function when the “Action!!!” button is clicked.
// Within the main function:
const main = () => {
	// Add the "big" class to the "grow-me" paragraph.
	document.querySelector('#grow-me').className = 'big';

	// ● Remove the "big" class to the "shrink-me" paragraph.
	document.querySelector('#shrink-me').classList.remove('big');

	// ● Find all the <li>s and log their text content to the console.

	let listItems = document.querySelectorAll('li');
	// for (let items of listItems) {
	// 	console.log(items.textContent);
	// }
	listItems.forEach(item => {
		console.log(item.innerHTML);
	});

	// ● Set the href of the link to "https://www.example.com" and update the text to say "somewhere" instead of  nowhere".
	document.querySelector('.link').setAttribute('href', 'https://www.example.com');
	document.querySelector('.link').innerHTML = 'somewhere';

	// ● Set the "display" CSS property of the "hide-me" paragraph to "none".
	document.querySelector('#hide-me').style.display = 'none';

	// ● Set the "display" CSS property of the "show-me" paragraph to "block".
	document.querySelector('#show-me').style.display = 'block';

	// ● Get the text that the user enters into the "name" input box and use it to set a welcome message in the <h1>, e.g., "Hello Grant!".
	let greeting = () => {
		let x = document.querySelector('#name');
		let name = x.value;
		document.querySelector('h1').innerHTML = 'Hello ' + name + '!';
	};
	greeting();
};
