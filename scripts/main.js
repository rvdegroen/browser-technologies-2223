const textAreas = document.querySelectorAll(`textarea`);
const inputs = document.querySelectorAll(`input`);
const elementsToSave = [...textAreas, ...inputs];

for (const element of elementsToSave) {
	// https://stackoverflow.com/a/46323878
	const previousValue = localStorage.getItem(element.name);

	if (previousValue) {
		if (element.type === 'radio') {
			const form = document.forms[0];
			const radioButtonGroup = form[element.name];
			for (const button of radioButtonGroup) {
				if (button.value === previousValue) {
					button.checked = true;
				}
			}
		} else {
			element.value = previousValue;
		}
	}

	element.addEventListener('change', (e) => {
		if (e.target.type === 'radio') {
			const form = document.forms[0];
			const radioButtonGroup = form[e.target.name];
			localStorage.setItem(e.target.name, radioButtonGroup.value);
		} else {
			localStorage.setItem(e.target.name, e.target.value);
		}
	});
}
