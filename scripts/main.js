// src: http://diveintohtml5.info/storage.html
// feature detection
function canUseLocalStorage() {
	try {
		if ('localStorage' in window && window['localStorage'] !== null) {
			localStorage.setItem('test-roshnie', true);
			localStorage.getItem('test-roshnie');
			localStorage.removeItem('test-roshnie');
			return true;
		}
	} catch (e) {
		return false;
	}
}

// feature detection
if (canUseLocalStorage) {
	const textAreas = document.querySelectorAll(`textarea`);
	const inputs = document.querySelectorAll(`input`);
	const elementsToSave = [...textAreas, ...inputs];

	for (const element of elementsToSave) {
		// https://stackoverflow.com/a/46323878
		// looking in localstorage if previousvalue is there
		const previousValue = localStorage.getItem(element.name);

		// Restore values from local storage
		if (previousValue) {
			// if its a radio:
			if (element.type === 'radio') {
				// just get the first form in the html
				const form = document.forms[0];
				// form contains radiogroup thats connected by name
				const radioButtonGroup = form[element.name];
				// looping through the radio buttons
				for (const button of radioButtonGroup) {
					// look for the previousvalue and set it to checked
					if (button.value === previousValue) {
						button.checked = true;
					}
				}
			} else {
				// just changes the value of previousvalue
				element.value = previousValue;
			}
		}

		// Save values to local storage on change
		element.addEventListener('change', (e) => {
			// if change on element of radio
			if (e.target.type === 'radio') {
				const form = document.forms[0];
				const radioButtonGroup = form[e.target.name];
				// set value of element or radiobutton value
				localStorage.setItem(e.target.name, radioButtonGroup.value);
			} else {
				localStorage.setItem(e.target.name, e.target.value);
			}
		});
	}
}
