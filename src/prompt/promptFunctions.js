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

export function hide(inputContainer){
	//hide Prompt
	inputContainer.style.visibility = "hidden";
}

export function show(inputContainer){
	//show Prompt
	inputContainer.style.visibility = "visible";
}

