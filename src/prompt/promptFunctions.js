export function getValues(inputContainer){
	//take node return input values
	let a =inputContainer.querySelectorAll("input");

	a.forEach(element => {
		console.log(element.value);
	});

	console.log("getValues not finished");
}

export function resetValues(inputContainer){
	//take node reset input values

	let a =inputContainer.querySelectorAll("input");

	a.forEach(element => {
		element.value = "";
	});

}

export function hidePrompt(inputContainer){
	//hide Prompt
	inputContainer.style.visibility = "hidden";
}

export function showPrompt(inputContainer){
	//show Prompt
	inputContainer.style.visibility = "visible";
}

