export function getValues(inputID){
	//take node return input values
	console.log("getValues of",inputID);
	let inputs =document.querySelector(`#${inputID}`).querySelectorAll("input");
	const values = {};

	inputs.forEach(element => {
		values[element.id] = element.value;
	});

	return values;
}

export function resetValues(inputID){
	//take node reset input values

	let a =document.querySelector(`#${inputID}`).querySelectorAll("input");

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

