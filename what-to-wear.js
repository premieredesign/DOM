const whatShouldIWear = (event_type, temp) => {
	let suggestEvent;
	let suggestTemp;

	switch (event_type.toLowerCase()) {
		case 'casual':
			suggestEvent = 'something comfy';
			break;
		case 'semi-formal':
			suggestEvent = 'a polo';
			break;
		case 'formal':
			suggestEvent = 'a suit';
			break;
		default:
			return;
	}

	if (temp < 54) {
		suggestTemp = 'a coat';
	} else if (temp >= 54 && temp < 70) {
		suggestTemp = 'a jacket';
	} else {
		suggestTemp = 'no jacket';
	}

	return `Since it is ${temp} degrees and you are going to a ${event_type} event you should wear ${suggestEvent} and ${suggestTemp}`;
};
console.log(whatShouldIWear('formal', 64));
