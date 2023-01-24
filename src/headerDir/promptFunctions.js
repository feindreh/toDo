export function getValues(inputContainer){
	//take node return input values
	let inputs =inputContainer.querySelectorAll("input");
	const values = {};

	inputs.forEach(element => {
		values[element.id] = element.value;
	});

	return values;
}

export function resetValues(inputContainer){
	//take node reset input values

	let a =inputContainer.querySelectorAll("input");

	a.forEach(element => {
		element.value = "";
	});

}

export function hide(element){
	//hide element
	element.style.visibility = "hidden";
}

export function show(element){
	//show inputCo
	element.style.visibility = "visible";
}

