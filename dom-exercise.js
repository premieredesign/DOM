/*
1. Here is a sample html file with a submit button. Now modify the style of the paragraph text through javascript code.
- NOTE: Paste snippet below in Html body tag

*/
para = document.querySelector('#text');
button = document.querySelector('#jsstyle');

const changeStyle = () => {
	para.style.fontSize = '25px';
	para.style.color = 'purple';
	para.style.backgroundColor = 'black';
};

button.addEventListener('click', changeStyle);

/*
Write a javascript function to get the values of First and Last name of the following form:
 */

//  creating a generic variable for the form
const form1 = document.querySelector('#form1');

// function to return the full name
let fullName = e => {
	// variables for first and last names
	const firstName = document.getElementById('form1').elements.namedItem('fname').value;
	const lastName = document.getElementById('form1').elements.namedItem('lname').value;

	console.log(firstName, lastName);
	e.preventDefault();
};

// creating the event listener
form1.addEventListener('submit', fullName);

/*
3. Write a javascript function to set the background color of a paragraph.

*/

// creating a generic variable for the other paragraph
otherPara = document.querySelector('#w3r');

// function to resize the paragraph
let resize = () => {
	otherPara.style.fontSize = '45px';
	otherPara.style.backgroundColor = 'tan';
};

// creating the event listener
otherPara.addEventListener('mouseenter', resize);

let bodyChange = document.querySelector('#body');

let change = () => {
	bodyChange.style.backgroundColor = 'tan';
};

bodyChange.addEventListener('load', change);

/*
4. Here is a sample html file with a submit button. Write a javascript function to get the value of the href, hreflang, rel, target, and type attributes of the specified link.

*/

let getAtt = document.querySelector('.attributesButton');
let w3r = document.querySelector('#w3r');

let href = w3r.getAttribute('href');
let hrefLang = w3r.getAttribute('hreflang');
let rel = w3r.getAttribute('rel');
let target = w3r.getAttribute('target');
let type = w3r.getAttribute('type');

let getAttributes = () => {
	console.log(`href: ${href}\n hreflang: ${hrefLang}\n rel: ${rel}\n Target: ${target}\nType: ${type}`);
};

getAtt.addEventListener('click', getAttributes);

// const button = document.getAttributes(e);
// e.getElementById('w3r');
// button.addEventListener('click', () => {
// 	console.log(
// 		`href${href.value}, hreflang${hreflang.value}, rel${rel.value}, target${target.value}, type: ${type.value}`
// 	);
// });

/*
5. Write a javascript function to get the width and height of the window (any time the window is resized)

*/
// const button = document.createElement()
const windowSize = () => {
	console.log(`The height of the window is ${window.innerHeight}\n
    The width of the window is ${window.innerWidth}`);
};

windowSize();
