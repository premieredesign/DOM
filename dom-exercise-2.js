// variable for button
const addFood = document.querySelector('#submit');
// variable for input
const foodInput = document.querySelector('#food-input');

function fruitSort() {
	// variable for input value
	let item = foodInput.value;
	// convert input value into a text node
	let text = document.createTextNode(item);
	// create li element
	let newItem = document.createElement('li');
	// add text into li
	newItem.appendChild(text);

	let radioValue = () => {
		choice = document.getElementsByName('fruitOrVeggies');

		for (i of choice) {
			if (i.checked) {
				return i.value;
			}
		}
	};
	// *** This works
	// if (radioValue() === 'fruit') {
	// 	console.log(`GOT IT!!!`);
	// } else {
	// 	console.log(`NOPE`);
	// }

	// *** this does not
	// add newItem to the ol
	if (radioValue() === 'fruit') {
		document.querySelector('#fruits').appendChild(newItem);
	} else {
		document.querySelector('#veggies').appendChild(newItem);
	}

	foodInput.value = '';
}

addFood.addEventListener('click', fruitSort);
