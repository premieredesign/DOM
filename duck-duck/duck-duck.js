// Code here

// 1. We want way to randomly assign goose to one of the Ducks
const generateRandom = Math.floor(Math.random() * 15);

// 2. Get the ducks
ducks = document.getElementsByClassName('duck');
// 3. Assign goose to the duck
ducks[generateRandom].id = 'goose';

// 4. Create list of the ducks that have been clicked
const clickedDucks = [];

// 5. Create the changeColor function
const changeColor = event => {
	if (event.target.classList.contains('duck')) {
		event.target.style.backgroundColor = 'green';
		clickedDucks.push(event.target);
	}

	if (event.target.id === 'goose') {
		clickedDucks.forEach(item => {
			item.style.backgroundColor = 'yellow';
		});
		event.target.style.backgroundColor = 'red';
		location.reload();
	}
};
// 6. Add the changeColor function to the du(item => {
for (let i of ducks) {
	i.addEventListener('click', event => changeColor(event));
}
