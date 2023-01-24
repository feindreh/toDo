export function getValues(inputContainer){
	//take node return input values
	console.log("get Values working");
	let a =inputContainer.querySelectorAll("input");

	a.forEach(element => {
		console.log(element.value);
	});

}

export function resetValues(inputContainer){
	//take node reset input values
	console.log("reset Values working");

	let a =inputContainer.querySelectorAll("input");

	a.forEach(element => {
		element.value = "";
	});

}

